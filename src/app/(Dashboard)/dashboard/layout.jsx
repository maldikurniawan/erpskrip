"use client";
import React, { Fragment, useEffect, useState } from 'react'
import CompSidebar from "../../../components/dashboard/CompSidebar";
import CompHeader from "../../../components/dashboard/CompHeader";
import { useRouter } from 'next/navigation';

const layout = ({ children }) => {
    const [sideOpen, setSideOpen] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('access');
        if (!token) {
            router.replace('/auth-system/login');
        }

        if (typeof window !== 'undefined') {
            setSideOpen(window.innerWidth >= 640);
        }
    }, [router]);

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