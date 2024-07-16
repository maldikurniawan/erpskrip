"use client";

import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";

type Item = {
  id: number;
  perusahaan: string;
  alamat_perusahaan: string;
  email_perusahaan: string;
  nomor_perusahaan: string;
  web_perusahaan: string;
  meeting: string;
  alamat_meeting: string;
  rencana_tanggal: string;
  waktu_tanggal: string;
  fetchData: () => void;
};

export default function UpdateAjukan(item: Item) {
  const [perusahaan, setPerusahaan] = useState(item.perusahaan);
  const [alamat_perusahaan, setAlamat] = useState(item.alamat_perusahaan);
  const [email_perusahaan, setEmail] = useState(item.email_perusahaan);
  const [nomor_perusahaan, setNomor] = useState(item.nomor_perusahaan);
  const [web_perusahaan, setWeb] = useState(item.web_perusahaan);
  const [meeting, setMeeting] = useState(item.meeting);
  const [alamat_meeting, setAlmet] = useState(item.alamat_meeting);
  const [rencana_tanggal, setTanggal] = useState(item.rencana_tanggal);
  const [waktu_tanggal, setWaktu] = useState(item.waktu_tanggal);
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  async function handleUpdate(e: SyntheticEvent) {
    e.preventDefault();

    setIsMutating(true);

    const response = await fetch(`http://192.168.120.41:8000/api/detailpembuatjanjiupdate/${item.id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        perusahaan: perusahaan,
        alamat_perusahaan: alamat_perusahaan,
        email_perusahaan: email_perusahaan,
        nomor_perusahaan: nomor_perusahaan,
        web_perusahaan: web_perusahaan,
        meeting: meeting,
        alamat_meeting: alamat_meeting,
        rencana_tanggal: rencana_tanggal,
        waktu_tanggal: waktu_tanggal,
      }),
    });
    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'The update was successful!',
      }).then(() => {
        item.fetchData();
      });
    } else {
      const errorData = await response.json();
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `The update failed: ${errorData.message}`,
      });
    }

    setIsMutating(false);

    router.refresh();
    setModal(false);
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
      <button className="text-blue-500 p-2 text-center" onClick={handleChange}>
        <FiEdit />
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Janji</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">Perusahaan</label>
              <input
                type="text"
                value={perusahaan}
                onChange={(e) => setPerusahaan(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Perusahaan"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Alamat Perusahaan</label>
              <input
                type="text"
                value={alamat_perusahaan}
                onChange={(e) => setAlamat(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Alamat Perusahaan"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Email Perusahaan</label>
              <input
                type="email"
                value={email_perusahaan}
                onChange={(e) => setEmail(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Email Perusahaan"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Nomor Perusahaan</label>
              <input
                type="text"
                value={nomor_perusahaan}
                onChange={(e) => setNomor(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Nomor Perusahaan"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Web Perusahaan</label>
              <input
                type="text"
                value={web_perusahaan}
                onChange={(e) => setWeb(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Web Perusahaan"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Meeting</label>
              <input
                type="text"
                value={meeting}
                onChange={(e) => setMeeting(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Meeting"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Alamat Meeting</label>
              <input
                type="text"
                value={alamat_meeting}
                onChange={(e) => setAlmet(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Alamat Meeting"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Tanggal</label>
              <input
                type="text"
                value={rencana_tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Tanggal"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Waktu</label>
              <input
                type="text"
                value={waktu_tanggal}
                onChange={(e) => setWaktu(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Waktu"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              {!isMutating ? (
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Updating...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}