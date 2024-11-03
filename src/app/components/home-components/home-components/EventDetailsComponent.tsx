"use client"
import React, { useState } from 'react';
// import dynamic from 'next/dynamic';
import { interFont, rubikFont } from '@/app/fonts/fontsConfig';
import { apiRoot } from '@/app/variables';
import axios from 'axios';
import Image from 'next/image';

// Dynamically import Countdown without SSR, casting the type to avoid type conflicts
// const Countdown = dynamic(() => import('react-countdown').then((mod) => mod.default as React.ComponentType<any>), { ssr: false });



const EventDetailsComponent = () => {
    const [showProcessing, setshowProcessing] = useState(false);
    const [apiMessage, setApiMessage] = useState("");

    const [formData, setFormData] = useState({
        token: '',
        name: ''
    });



    const getTicketFunction = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.token.trim() === '' || formData.name.trim() === '') {
            setApiMessage("No input must be empty");
            return;
        }
        setshowProcessing(true);

        axios.request(
            {
                url: apiRoot,
                method: 'put',
                data: formData,
                maxBodyLength: Infinity,
                responseType: 'blob'
            }
        )
            .then(async (response) => {
                setApiMessage("Token verified successfully" + ", downloading your ticket... check your downloads");
                setshowProcessing(false);

                // download link and trigger
                const url = window.URL.createObjectURL(response.data);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'love-and-pain-ticket.jpg'; // Set a default filename for the download
                link.click();

                // Cleaning up the object URL after downloading
                window.URL.revokeObjectURL(url);
            })
            .catch((error) => {
                error.status === 404
                    ? setApiMessage("Token is invalid or has expired")
                    : setApiMessage("Could not perform request, Something went wrong");

                setshowProcessing(false);
            });


    }




    return (
        <div className='w-full py-32 flex flex-col items-center justify-center text-white sm:px-8 px-4 bg-gradient-to-r from-[#d32aae] to-[#1c00bd]'>
            {
                showProcessing
                &&
                <div className='fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-black/60'>
                    <div className='spinner' />
                </div>
            }



            <div className='sm:p-10 p-8 min-h-[550px] flex flex-col gap-y-8 justify-center items-center border border-white shadow-2xl shadow-pink-500'>
                <h1 className='md:w-[500px] sm:w-[350px] w-full mx-auto text-2xl text-center'>
                    {`
                        Ticket Information
                    `}
                </h1>



                <div className='w-full h-[260px] shadow-md shadow-gray-700 overflow-hidden'>
                    <Image
                        alt='' src={'/images/pictures/love-and-pain.jpg'}
                        width={100} height={0} quality={100} priority={true} unoptimized={true}
                        className='flex h-full w-full object-cover'
                    >
                    </Image>
                </div>



                <div className='md:w-[500px] sm:w-[350px] w-full mx-auto flex flex-col justify-center items-center gap-y-8  text-sm'>

                    <ul className='w-full h-full flex flex-col gap-y-3 text-xs'>
                        <li className='flex gap-x-4 border p-3 border-gray-200/50'>
                            <h1>
                                {`Amount: `}
                            </h1>

                            <p>
                                {`₦${(7000).toLocaleString()}`}
                            </p>
                        </li>

                        <li className='flex gap-x-4 border p-3 border-gray-200/50'>
                            <h1>
                                {`Account No: `}
                            </h1>

                            <p>
                                {`7262456798`}
                            </p>
                        </li>

                        <li className='flex gap-x-4 border p-3 border-gray-200/50'>
                            <h1>
                                {`Bank: `}
                            </h1>

                            <p>
                                {`Wema bank`}
                            </p>
                        </li>

                        <li className='flex gap-x-4 border p-3 border-gray-200/50'>
                            <h1>
                                {`Account Name: `}
                            </h1>

                            <p>
                                {`Piggyvest/Adeleke Joshua`}
                            </p>
                        </li>

                        <a target="_blank" rel="noopener noreferrer" href="https://chat.whatsapp.com/IME2gpsoJx5KTZHl5pdhWf" className={`${rubikFont.className} w-full h-[60px] flex justify-center items-center text-pink-500 bg-gray-200 border-pink-500 shadow-sm shadow-gray-800  text-sm`}>
                            {`Confirm Payment`}
                        </a>

                    </ul>


                    <hr className='w-full ' />

                    <form onSubmit={(e) => { getTicketFunction(e) }} className='w-full h-full flex flex-col gap-y-5'>
                        <input
                            id='tokenInput'
                            value={formData.token}
                            onChange={(e) => { setFormData(value => { return { ...value, token: e.target.value } }) }}
                            required type='text' placeholder='Enter code to get ticket'
                            className={`${interFont.className}  py-[20px] pl-3 w-full text-gray-800 outline-pink-500`}
                        />

                        <input
                            id='tokenInput'
                            value={formData.name}
                            onChange={(e) => { setFormData(value => { return { ...value, name: e.target.value } }) }}
                            required type='text' placeholder='Enter your name'
                            className={`${interFont.className}  py-[20px] pl-3 w-full text-gray-800 outline-pink-500`}
                        />


                        <p className='font-bold tracking-widest text-sm  text-center pl-4 text-white'>
                            {apiMessage}
                        </p>

                        <button className={`${rubikFont.className} h-[60px] w-full bg-pink-500 shadow-sm shadow-gray-800`}>
                            {`Get Ticket`}
                        </button>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default EventDetailsComponent;
