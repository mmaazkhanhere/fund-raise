/*A react component that allows users to upload images, especially for the
campaign they want to run. It uses React Dropzone library to achieve that */

"use client"

import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import { useDropzone } from 'react-dropzone'

type Props = {
    value?: string; //base64 representation of the uploaded image
    onChange: (base64: string) => void; //function called when image is uploaded
    disabled?: boolean; //boolean indicating whether the component is disabled
    label?: string; //text displayed at the dropzone
}

const ImageUpload = ({ value, onChange, disabled, label }: Props) => {

    const [base64, setBase64] = useState(value);

    /*A callback function that calls the onChange function with base64 representation
    of the uploaded image */
    const handleChange = useCallback((base64: string) => {
        onChange(base64);
    }, [onChange]);


    /*callback function invoked when an image is dropped into the dropzone. It
    reads the dropped file, converts it to base64, updates the state and calls
    the above handleChange function */
    const handleDrop = useCallback((files: any) => {
        const file = files[0];
        const reader = new FileReader();

        reader.onload = (event: any) => {
            setBase64(event.target.result);
            handleChange(event.target.result);
        }
        reader.readAsDataURL(file);
    }, [handleChange]);

    const { getRootProps, getInputProps } = useDropzone({
        maxFiles: 1, //maximum number of files to display
        onDrop: handleDrop, //function to call when the image is dropped
        disabled, //disabled the dropzone when disabled prop is true
        accept: { //types of images to accept
            'image/jpeg': [],
            'image/png': [],
        }
    })

    return (
        <div
            {...getRootProps({
                className: `w-44 md:w-full h-44 md:h-60 text-[#343a40] text-center 
                border-2 border-dotted rounded-xl border-neutral-700 max-w-3xl
                cursor-pointer self-center flex items-center justify-center`})}
        >
            <input {...getInputProps()} />
            {
                base64 ? (
                    <div className='flex items-center justify-center'>
                        <Image
                            src={base64}
                            alt='Uploaded Image'
                            height={100}
                            width={100}
                        />
                    </div>
                ) : (
                    <p>{label}</p>
                )
            }
        </div>
    )
}

export default ImageUpload