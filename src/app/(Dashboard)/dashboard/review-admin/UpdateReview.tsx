"use client";

import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";

type Item = {
    id: number;
    name: string;
    jabatan: string;
    content: string;
    image: string;
    fetchData: () => void;
};

export default function UpdateReview(item: Item) {
    const [name, setName] = useState(item.name);
    const [jabatan, setJabatan] = useState(item.jabatan);
    const [content, setContent] = useState(item.content);
    const [image, setImage] = useState<File | null>(null);
    const [modal, setModal] = useState(false);
    const [isMutating, setIsMutating] = useState(false);

    const router = useRouter();

    async function handleUpdate(e: SyntheticEvent) {
        e.preventDefault();

        setIsMutating(true);

        const formData = new FormData();
        formData.append('name', name);
        formData.append('jabatan', jabatan);
        formData.append('content', content);
        if (image) {
            formData.append('image', image);
        }

        const response = await fetch(`http://192.168.120.41:8000/api/reviewupdate/${item.id}/`, {
            method: "PATCH",
            body: formData,
        });
        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'The update was successful!',
            }).then(() => {
                item.fetchData(); // Reload table data
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
                    <h3 className="font-bold text-lg">Edit Review</h3>
                    <form onSubmit={handleUpdate}>
                        <div className="form-control">
                            <label className="label font-bold">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="input w-full input-bordered"
                                placeholder="Nama"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">Jabatan</label>
                            <input
                                type="text"
                                value={jabatan}
                                onChange={(e) => setJabatan(e.target.value)}
                                className="input w-full input-bordered"
                                placeholder="Jabatan"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">Konten Ulasan</label>
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="input w-full input-bordered"
                                placeholder="Konten Ulasan"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">Foto</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setImage(e.target.files?.[0] || null)}
                                className="w-full"
                                placeholder="Input Foto"
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
