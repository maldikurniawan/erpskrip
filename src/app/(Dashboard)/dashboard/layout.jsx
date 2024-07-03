"use client";
import React, { Fragment, useState } from 'react'
import CompSidebar from "../../../components/dashboard/CompSidebar";
import CompHeader from "../../../components/dashboard/CompHeader";

const layout = ({ children }) => {
    const [sideOpen, setSideOpen] = useState(
        window.innerWidth < 640 ? false : true
    );
    return (
        <Fragment>
            <div className="flex ">
                <CompSidebar sideOpen={sideOpen} setSideOpen={setSideOpen} />
                <div className="w-full h-screen overflow-clip flex flex-col">
                    <CompHeader sideOpen={sideOpen} setSideOpen={setSideOpen} />
                    <div className="bg-slate-100 h-full overflow-y-auto custom-scroll px-8 py-10">
                        {children}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default layout