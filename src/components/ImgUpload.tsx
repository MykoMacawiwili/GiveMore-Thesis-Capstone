'use client'

import supabase from "@/app/utils/supabase";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "./Button";

export var imgPath = ""

export function ImageUpload({ folderName, charityID, recordID }) {

    const CDNURL = "https://dkvtrmaiscnbjtfxpurj.supabase.co/storage/v1/object/public/uploads/" + folderName + "/" + charityID + "/" + recordID + "/"

    const [images, setImages]: any[] = useState([])

    async function getImages() {
        const { data, error } = await supabase
            .storage
            .from('uploads')
            .list(folderName + "/" + charityID + "/" + recordID, {
                limit: 100,
                offset: 0,
                sortBy: { column: "name", order: "asc" }
            })

        if (data !== null) {
            setImages(data);
        } else {
            alert("Error Loading Images");
            console.log(error);
        }


    }

    useEffect(() => {
        if (folderName && charityID && recordID) {
            getImages()
        }
    }, [folderName && charityID && recordID])

    let img: any

    function setFile(e) {
        img = e.target.files[0]
    }

    async function uploadImage() {
        let file = img

        const { data, error } = await supabase
            .storage
            .from('uploads')
            .upload(folderName + "/" + charityID + "/" + recordID + "/" + uuidv4(), file)

        if (data) {
            getImages()
        } else {
            console.log(error)
        }

        imgPath = String(data?.path)
    }

    return (
        <>
            <div className="col-span-full">
                <form action={uploadImage}>
                    <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                        Upload File/s
                    </label>
                    <div className="space-y-5">
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label
                                        htmlFor="post-images"
                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                        <span>Upload a file</span>
                                        <input id="post-images" name="post-images" type="file" className="sr-only" onChange={(e) => setFile(e)} required />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                        <Button type="submit" variant="solid" color="blue">Upload File</Button>
                    </div>
                </form>
            </div>
        </>

    )
}