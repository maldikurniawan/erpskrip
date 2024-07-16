"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { CompInputs } from "../../../../../components/dashboard/index";
import { postData, putData } from "../../../../../actions/index";
import { API_URL_janji, API_URL_janjiupdate } from "../../../../../constants/index";
import { janjiReducers } from "../../../../../redux/reducers/janjiSlice";
import Swal from 'sweetalert2';

const AddAjukanPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
    });

    const [inputs, setInputs] = useState([
        {
            label: "*Nama Perusahaan",
            name: "perusahaan",
            type: "text",
            placeholder: "Input Perusahaan",
            value: "",
        },
        {
            label: "*Alamat Perusahaan",
            name: "alamat_perusahaan",
            type: "text",
            placeholder: "Input Alamat Perusahaan",
            value: "",
        },
        {
            label: "*Email Perusahaan",
            name: "email_perusahaan",
            type: "text",
            placeholder: "Input Email",
            value: "",
        },
        {
            label: "*Nomor Perusahaan",
            name: "nomor_perusahaan",
            type: "text",
            placeholder: "Input Nomor",
            value: "",
        },
        {
            label: "Web Perusahaan",
            name: "web_perusahaan",
            type: "text",
            placeholder: "Input Web",
            value: "",
        },
        {
            label: "*Meeting",
            name: "meeting",
            type: "select",
            placeholder: "Input Status Meeting",
            value: "",
            options: [
                {
                    value: "online",
                    label: "Online",
                },
                {
                    value: "offline",
                    label: "Offline",
                },
            ],
        },
        {
            label: "Alamat Meeting",
            name: "alamat_meeting",
            type: "text",
            placeholder: "Input Alamat Meeting",
            value: "",
        },
        {
            label: "*Rencana Tanggal",
            name: "rencana_tanggal",
            type: "date",
            placeholder: "Input Tanggal",
            value: "",
        },
        {
            label: "*Waktu Tanggal",
            name: "waktu_tanggal",
            type: "select",
            placeholder: "Input Waktu",
            value: "",
            options: [
                {
                    value: "09:00:00",
                    label: "09:00",
                },
                {
                    value: "10:00:00",
                    label: "10:00",
                },
                {
                    value: "11:00:00",
                    label: "11:00",
                },
                {
                    value: "14:00:00",
                    label: "14:00",
                },
                {
                    value: "15:00:00",
                    label: "15:00",
                },
                {
                    value: "16:00:00",
                    label: "16:00",
                },
                {
                    value: "17:00:00",
                    label: "17:00",
                },
            ],
        },
    ]);

    const handleInput = (e, inputIdx) => {
        const newInputs = [...inputs];
        newInputs[inputIdx].value = e.target.value;
        setInputs(newInputs);
    };

    const onSubmit = () => {
        if (!inputs[0].value.trim() ||
            !inputs[1].value.trim() ||
            !inputs[2].value.trim() ||
            !inputs[3].value.trim() ||
            !inputs[5].value.trim() ||
            !inputs[7].value.trim() ||
            !inputs[8].value.trim()) {
            Toast.fire({
                icon: "error",
                title: "Please fill in all required fields."
            });
            return;
        }
        const formData = new FormData();

        formData.append("perusahaan", inputs[0].value);
        formData.append("alamat_perusahaan", inputs[1].value);
        formData.append("email_perusahaan", inputs[2].value);
        formData.append("nomor_perusahaan", inputs[3].value);
        formData.append("web_perusahaan", inputs[4].value);
        formData.append("meeting", inputs[5].value);
        formData.append("alamat_meeting", inputs[6].value);
        formData.append("rencana_tanggal", inputs[7].value);
        formData.append("waktu_tanggal", inputs[8].value);

        if (!router.query?.id) {
            postData(
                API_URL_janji,
                formData,
                { dispatch, redux: janjiReducers },
                "ADD_JANJI"
            );
            router.push("/dashboard/ajukan-bertemu");
        } else {
            putData(
                `${API_URL_janjiupdate}${router.query.id}`,
                formData,
                { dispatch, redux: janjiReducers },
                "ADD_JANJI"
            );
            router.push("/dashboard/ajukan-bertemu");
        }
    };

    useEffect(() => {
        if (router.query && Object.keys(router.query).length > 0) {
            const newInputs = [...inputs];
            newInputs[0].value = router.query.perusahaan || "";
            newInputs[1].value = router.query.alamat_perusahaan || "";
            newInputs[2].value = router.query.email_perusahaan || "";
            newInputs[3].value = router.query.nomor_perusahaan || "";
            newInputs[4].value = router.query.web_perusahaan || "";
            newInputs[5].value = router.query.meeting || "";
            newInputs[6].value = router.query.alamat_meeting || "";
            newInputs[7].value = router.query.rencana_tanggal || "";
            newInputs[8].value = router.query.waktu_tanggal || "";

            setInputs(newInputs);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router]);

    return (
        <div>
            <CompInputs
                inputs={inputs}
                setInputs={setInputs}
                handleInput={handleInput}
            />
            <div className="flex justify-end mt-4">
                <button
                    onClick={onSubmit}
                    className="text-xs md:text-sm whitespace-nowrap font-medium px-4 py-2 bg-primary-base hover:bg-primary-baseHover active:bg-primary-baseActive text-white rounded-lg shadow hover:shadow-lg transition-all"
                >
                    Submit
                </button>
            </div>
        </div>

    )
}

export default AddAjukanPage