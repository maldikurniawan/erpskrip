"use client";
import React, { useState, Fragment, useCallback, useEffect } from "react";
import { CompCardContainer, CompPagination } from "../../../../components/dashboard/index";
import { icons } from "../../../../../public/icons";
import { SyncLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, getData } from "../../../../actions/index";
import { API_URL_review, API_URL_reviewupdate } from "../../../../constants/index";
import { reviewReducers } from "../../../../redux/reducers/reviewSlice";
import { BiSortDown, BiSortUp } from "react-icons/bi";
import { useRouter } from "next/navigation";
import UpdateReview from "./UpdateReview";

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const tableHead = [
    { title: "No", field: "id" },
    { title: "Nama", field: "name" },
    { title: "Jabatan", field: "jabatan" },
    { title: "Foto", field: "image" },
  ];
  const {
    getReviewResult,
    getReviewLoading,
    getReviewError,
    addReviewResult,
    deleteReviewResult,
  } = useSelector((state) => state.review);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const get = useCallback(
    async (params) => {
      getData(
        API_URL_review,
        params,
        { dispatch, redux: reviewReducers },
        "GET_REVIEW"
      );
    },
    [dispatch]
  );

  const onDelete = (item) => {
    deleteData(
      API_URL_reviewupdate + item.id + '/',
      { dispatch, redux: reviewReducers },
      "DELETE_REVIEW"
    );
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
    if (addReviewResult) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addReviewResult]);

  useEffect(() => {
    if (deleteReviewResult) {
      fetchData();
    }
  }, [deleteReviewResult]);

  return (
    <Fragment>
      <div className="flex justify-between items-center">
        <h1 className="text-lg md:text-3xl font-bold transition-all">
          Data Review
        </h1>
        <button
          className="text-xs md:text-sm whitespace-nowrap font-medium px-4 py-2 bg-primary-base hover:bg-primary-baseHover active:bg-primary-baseActive text-white rounded-lg shadow hover:shadow-lg transition-all"
          onClick={() => router.push("/dashboard/review-admin/AddReviewPage")}
        >
          Tambah Review
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
                    className="p-2 text-sm whitespace-nowrap"
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
              {getReviewLoading && (
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
              {getReviewError && (
                <tr>
                  <td className="text-center" colSpan={tableHead.length + 1}>
                    <div className="pt-20 pb-12 flex justify-center items-center text-xs text-red-500">
                      {getReviewError}
                    </div>
                  </td>
                </tr>
              )}

              {/* Result = 0 */}
              {getReviewResult && getReviewResult.results.length === 0 && (
                <tr>
                  <td className="text-center" colSpan={tableHead.length + 1}>
                    <div className="pt-20 pb-12 flex justify-center items-center text-xs text-slate-600">
                      No Data
                    </div>
                  </td>
                </tr>
              )}

              {getReviewResult && getReviewResult.results.map((item, itemIdx) => (
                <tr
                  key={itemIdx}
                  className="border-b border-gray-200 text-sm hover:bg-white/60 transition-all"
                >
                  <td className="p-2 text-center whitespace-nowrap">
                    {itemIdx + offset + 1}
                  </td>
                  <td className="p-2 text-center">{item.name}</td>
                  <td className="p-2 text-center whitespace-nowrap">
                    {item.jabatan}
                  </td>
                  <td className="p-2 flex justify-center">
                    <img
                      src={item.image}
                      alt="foto"
                      className="w-8 h-8 rounded-full"
                    />
                  </td>
                  <td className="p-2 text-center whitespace-nowrap">
                    <div className="flex justify-end">
                      <UpdateReview {...item} />
                      {action.map((action, actionIdx) => (
                        <button
                          key={actionIdx}
                          className={`mx-1 ${action.color}`}
                          onClick={() => action.func(item)}
                        >
                          {action.icon}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CompPagination
          handlePageClick={handlePageClick}
          pageCount={getReviewResult.count > 0 ? getReviewResult.count : 0}
          limit={limit}
          setLimit={handleSelect}
        />
      </CompCardContainer>
    </Fragment>
  );
};

export default page;
