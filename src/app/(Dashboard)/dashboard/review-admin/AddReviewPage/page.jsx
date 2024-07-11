"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { CompInputs } from "../../../../../components/dashboard/index";
import { postData, putData } from "../../../../../actions/index";
import { API_URL_review, API_URL_reviewupdate } from "../../../../../constants/index";
import { reviewReducers } from "../../../../../redux/reducers/reviewSlice";
import { Editor } from "@tinymce/tinymce-react";

const AddReviewPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const editorRef = useRef(null);
    const initEditor = {
        plugins:
            "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons",
        imagetools_cors_hosts: ["picsum.photos"],
        menubar: "file edit view insert format tools table help",
        toolbar:
            "undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
        toolbar_sticky: true,
        autosave_prefix: "{path}{query}-{id}-",
        image_advtab: true,
        importcss_append: true,
        height: 520,
        image_caption: true,
        quickbars_selection_toolbar:
            "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
        toolbar_mode: "sliding",
        contextmenu: "link image imagetools table",
    };

    const [inputs, setInputs] = useState([
        {
            label: "Nama",
            name: "name",
            type: "text",
            placeholder: "Input Nama",
            value: "",
        },
        {
            label: "Jabatan",
            name: "jabatan",
            type: "text",
            placeholder: "Input Jabatan",
            value: "",
        },
        {
            label: "Foto",
            name: "image",
            type: "file",
            placeholder: "Input Foto",
            value: "",
            image: "",
            accept: "image/*",
        },
    ]);
    const [content, setContent] = useState();
    const [imgPreview, setImgPreview] = useState("");

    const handleInput = (e, inputIdx) => {
        const newInputs = [...inputs];
        if (e.target.type === "file") {
            newInputs[inputIdx]["value"] = e.target.value;
            newInputs[inputIdx]["image"] = e.target.files[0];
            if (e.target.files[0]) {
                setImgPreview(URL.createObjectURL(e.target.files[0]));
            } else {
                setImgPreview("");
            }
        }
        newInputs[inputIdx].value = e.target.value;
        setInputs(newInputs);
    };

    const onSubmit = () => {
        const formData = new FormData();

        formData.append("name", inputs[0].value);
        formData.append("jabatan", inputs[1].value);
        if (editorRef.current && editorRef.current.getContent() !== "") {
            formData.append("content", editorRef.current.getContent());
        }
        if (inputs[2].image) {
            formData.append("image", inputs[2].image);
        }

        if (!router.query?.id) {
            postData(
                API_URL_review,
                formData,
                { dispatch, redux: reviewReducers },
                "ADD_REVIEW"
            );
            router.push("/dashboard/review-admin");
        } else {
            putData(
                `${API_URL_reviewupdate}${router.query.id}`,
                formData,
                { dispatch, redux: reviewReducers },
                "ADD_REVIEW"
            );
            router.push("/dashboard/review-admin");
        }
    };

    useEffect(() => {
        if (router.query && Object.keys(router.query).length > 0) {
            const newInputs = [...inputs];
            newInputs[0].value = router.query.name || "";
            newInputs[1].value = router.query.jabatan || "";
            setContent(router.query.content);
            setImgPreview(router.query.image);

            const fileName = router.query.image.split("/").pop();
            fetch(router.query.image).then(async (response) => {
                const contentType = response.headers.get("content-type");
                const blob = await response.blob();
                const file = new File([blob], fileName, { type: contentType });
                newInputs[2].image = file;
            });

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
            <div className="font-medium">Image Preview</div>
            <div className="bg-white w-full shadow p-3 rounded-lg mb-3 mt-1 file:border-none file:px-3 file:py-1 file:rounded-lg text-sm">
                {imgPreview ? (
                    <img
                        className={`w-full h-96 object-cover rounded-lg`}
                        src={imgPreview}
                        alt="preview"
                    />
                ) : (
                    <div className="text-center">No Image</div>
                )}
            </div>
            <div className="font-medium">Content</div>
            <Editor
                initialValue={content}
                apiKey="kmzhpan6svv2moc42xwwd0ywfu653q2wmfbbujjo0rzrl0mz"
                onInit={(evt, editor) => (editorRef.current = editor)}
                init={initEditor}
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

export default AddReviewPage