"use client";
import React, { useState, Fragment, useCallback, useEffect } from "react";
import { CompCardContainer, CompPagination } from "../../../../components/dashboard/index";
import { icons } from "../../../../../public/icons";
import { SyncLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, getData } from "../../../../actions/index";
import { API_URL_janji, API_URL_janjiupdate } from "../../../../constants/index";
import { janjiReducers } from "../../../../redux/reducers/janjiSlice";
import { BiSortDown, BiSortUp } from "react-icons/bi";
import { useRouter } from "next/navigation";
import moment from 'moment';

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const tableHead = [
    { title: "No", field: "id" },
    { title: "Nama Perusahaan", field: "perusahaan" },
    { title: "Alamat Perusahaan", field: "alamat_perusahaan" },
    { title: "Email Perusahaan", field: "email_perusahaan" },
    { title: "No. Perusahaan", field: "nomor_perusahaan" },
    { title: "Web Perusahaan", field: "web_perusahaan" },
    { title: "Meeting", field: "meeting" },
    { title: "Alamat Meeting", field: "alamat_meeting" },
    { title: "Tanggal Meeting", field: "rencana_tanggal" },
  ];
  const {
    getJanjiResult,
    getJanjiLoading,
    getJanjiError,
    addJanjiResult,
    deleteJanjiResult,
  } = useSelector((state) => state.janji);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const get = useCallback(
    async (params) => {
      getData(
        API_URL_janji,
        params,
        { dispatch, redux: janjiReducers },
        "GET_JANJI"
      );
    },
    [dispatch]
  );

  const onDelete = (item) => {
    deleteData(
      API_URL_janjiupdate + item.id + '/',
      { dispatch, redux: janjiReducers },
      "DELETE_JANJI"
    );
  };

  const onEdit = (item) => {
    router.push(`/dashboard/ajukan-bertemu/AddAjukanPage`, {
      state: {
        item,
      },
    });
  };

  const onSearch = (value) => {
    setSearch(value);
    const params = `?limit=${limit}&offset=${""}&ordering=${""}&search=${value}`;
    get(params);
  };

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  // Sort icons
  const renderSortIcon = (field) => {
    if (field === sortColumn) {
      return sortOrder === "asc" ? (
        <BiSortUp />
      ) : (
        <BiSortDown />
      );
    }
    return <BiSortUp className="text-gray-300" />;
  };

  const handlePageClick = (e) => {
    const offset = e.selected * limit;
    const params = `?limit=${limit}&offset=${offset}&ordering=${sortOrder === "desc" ? "-" : ""}${sortColumn}&search=${search}`;
    get(params);
    setOffset(offset);
  };

  const handleSelect = (limit) => {
    const params = `?limit=${limit}&offset=${offset}&ordering=${sortOrder === "desc" ? "-" : ""}${sortColumn}&search=${search}`;
    get(params);
    setLimit(limit);
  };

  const action = [
    {
      name: "edit",
      icon: icons.fiedit,
      color: "text-blue-500",
      func: onEdit,
    },
    {
      name: "hapus",
      icon: icons.rideletebin6line,
      color: "text-red-500",
      func: onDelete,
    },
  ];

  const fetchData = useCallback(() => {
    const params = `?limit=${limit}&offset=${""}&ordering=${sortOrder === "desc" ? "-" : ""}${sortColumn}&search=${""}`;
    get(params);
  }, [get, sortColumn, sortOrder]);

  useEffect(() => {
    fetchData();
  }, [sortColumn, sortOrder]);

  useEffect(() => {
    if (addJanjiResult) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addJanjiResult]);

  useEffect(() => {
    if (deleteJanjiResult) {
      fetchData();
    }
  }, [deleteJanjiResult]);

  return (
    <Fragment>
      <div className="flex justify-between items-center">
        <h1 className="text-lg md:text-3xl font-bold transition-all">
          Data Janji Bertemu
        </h1>
        <button
          className="text-xs md:text-sm whitespace-nowrap font-medium px-4 py-2 bg-primary-base hover:bg-primary-baseHover active:bg-primary-baseActive text-white rounded-lg shadow hover:shadow-lg transition-all"
          onClick={() => router.push("/dashboard/ajukan-bertemu/AddAjukanPage")}
        >
          Tambah Janji
        </button>
      </div>
      <br />
      <CompCardContainer>
        <div className="w-full flex text-gray-600">
          <div className="p-1 text-lg mr-3">{icons.fisearch}</div>
          <input
            type="text"
            className="w-full"
            placeholder="Search"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </CompCardContainer>
      <br />

      {/* Content */}
      <CompCardContainer>
        <div className="overflow-y-auto custom-scroll">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                {tableHead.map((item, itemIdx) => (
                  <th
                    key={itemIdx}
                    className="p-2 text-sm whitespace-normal"
                    onClick={() => {
                      item.field && handleSort(item.field);
                    }}
                  >
                    <span className="flex text-center items-center gap-2 justify-center">
                      {item.title}
                      {item.field && renderSortIcon(item.field)}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Loading */}
              {getJanjiLoading && (
                <tr>
                  <td
                    className="text-center py-12"
                    colSpan={tableHead.length + 1}
                  >
                    <div className="pt-10 pb-6 flex justify-center items-center">
                      <SyncLoader color="#111827" />
                    </div>
                  </td>
                </tr>
              )}

              {/* Error */}
              {getJanjiError && (
                <tr>
                  <td className="text-center" colSpan={tableHead.length + 1}>
                    <div className="pt-20 pb-12 flex justify-center items-center text-xs text-red-500">
                      {getJanjiError}
                    </div>
                  </td>
                </tr>
              )}

              {/* Result = 0 */}
              {getJanjiResult && getJanjiResult.results.length === 0 && (
                <tr>
                  <td className="text-center" colSpan={tableHead.length + 1}>
                    <div className="pt-20 pb-12 flex justify-center items-center text-xs text-slate-600">
                      No Data
                    </div>
                  </td>
                </tr>
              )}

              {getJanjiResult && getJanjiResult.results.map((item, itemIdx) => (
                <tr
                  key={itemIdx}
                  className="border-b border-gray-200 text-sm hover:bg-white/60 transition-all"
                >
                  <td className="p-2 text-center whitespace-normal">
                    {itemIdx + offset + 1}
                  </td>
                  <td className="p-2 text-center">{item.perusahaan}</td>
                  <td className="p-2 text-center whitespace-normal">
                    {item.alamat_perusahaan}
                  </td>
                  <td className="p-2 text-center whitespace-normal">
                    {item.email_perusahaan}
                  </td>
                  <td className="p-2 text-center whitespace-normal">
                    {item.nomor_perusahaan}
                  </td>
                  <td className="p-2 text-center whitespace-normal">
                    {item.web_perusahaan ? <div>{item.web_perusahaan}</div> : <div>-</div>}
                  </td>
                  <td className="p-2 text-center whitespace-normal">
                    {item.meeting}
                  </td>
                  <td className="p-2 text-center whitespace-normal">
                    {item.alamat_meeting ? <div>{item.alamat_meeting}</div> : <div>-</div>}
                  </td>
                  <td className="p-2 text-center whitespace-normal">
                    {moment(item.rencana_tanggal).format("DD-MM-YYYY")}
                  </td>
                  <td className="p-2 text-center whitespace-normal">
                    {item.url}
                  </td>
                  <td className="p-2 text-center whitespace-nowrap">
                    {action.map((action, actionIdx) => (
                      <button
                        key={actionIdx}
                        className={`mx-1 ${action.color}`}
                        onClick={() => action.func(item)}
                      >
                        {action.icon}
                      </button>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CompPagination
          handlePageClick={handlePageClick}
          pageCount={getJanjiResult.count > 0 ? getJanjiResult.count : 0}
          limit={limit}
          setLimit={handleSelect}
        />
      </CompCardContainer>
    </Fragment>
  );
};

export default page;
