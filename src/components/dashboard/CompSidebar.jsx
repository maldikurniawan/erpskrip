import React, { Fragment, useState } from "react";
import Link from "next/link";

// Hooks
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useRef } from "react";
import { MdMenuBook, MdPeople, MdReviews, MdSpaceDashboard } from "react-icons/md";

const CompSidebar = ({ sideOpen, setSideOpen }) => {
  const initNav = {
    pricelist: false,
  };
  const [navopen, setNavopen] = useState(initNav);
  const navOpen = (data) => {
    setNavopen({ ...initNav, [data]: !navopen[data] });
  };

  const ref = useRef();
  useOnClickOutside(ref, () => navOpen(initNav));

  const [menuItem] = useState([
    {
      title: "Dashboard",
      link: "/dashboard",
      icon: <MdSpaceDashboard />,
    },
    {
      title: "Janji",
      link: "/dashboard/ajukan-bertemu",
      icon: <MdPeople />,
    },
    {
      title: "Review",
      link: "/dashboard/review-admin",
      icon: <MdReviews />,
    },
    {
      title: "Artikel",
      link: "/dashboard",
      icon: <MdMenuBook />,
    },
  ]);

  return (
    <Fragment>
      <div
        onClick={() => setSideOpen(!sideOpen)}
        className={`fixed w-screen h-screen sm:hidden ${sideOpen ? "" : "hidden"
          }`}
      ></div>

      {/* Sidebar */}
      <div
        className={`${sideOpen ? "w-48 sm:w-60 left-0" : "w-14 -left-96 sm:left-0 sm:block"
          } z-10 fixed sm:relative h-screen flex flex-col bg-[#0F172A] shadow-lg shadow-slate-400 sm:shadow-none text-white transition-all rounded-r-3xl sm:rounded-none`}
      >
        {/* Logo */}
        <div className="w-full flex justify-center my-4">
          <img
            src="/assets/logo-erp.png"
            alt="logo"
            className="w-10"
          />
        </div>

        {/* Menu */}
        <div className="px-2 pb-5 text-sm overflow-y-auto max-h-[80vh] hidden-scroll">
          {menuItem.map((item, itemIdx) => (
            <Link
              key={itemIdx}
              href={item.link}
              className="flex items-center gap-2 p-2 hover:bg-white rounded-lg hover:text-black text-base"
            >
              <div>
                {item.icon}
              </div>
              <div className={`${sideOpen ? "block" : "hidden"
                }`}>
                {item.title}
              </div>
            </Link>
          ))}
        </div>

        {/* Copyright */}
        {sideOpen && (
          <div className="text-[8px] text-center flex w-full mt-auto mb-2 items-center justify-center">
            Copyright &copy; PT. Queen Network Nusantara
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default CompSidebar;
