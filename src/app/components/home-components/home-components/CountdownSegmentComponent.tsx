"use client";
import { rubikFont } from '@/app/fonts/fontsConfig';
import React from 'react'

interface ICountdownSegmentComponent{
    days:number,
    hours:number,
    minutes:number, 
    seconds:number, 
    completed:boolean
}



const CountdownSegmentComponent:React.FC<ICountdownSegmentComponent> = ({ days, hours, minutes, seconds }) => {
    return (

        <div className="flex justify-center items-center w-full md:gap-x-6 gap-x-3 px-20">

            <div className="flex flex-col w-full h-full justify-center items-center gap-y-2">
                <div className={`${rubikFont.className} lg:size-[100px] size-[75px] rounded-2xl bg-white border shadow-sm shadow-gray-800 p-4 flex justify-center items-center text-pink-500 md:text-5xl text-2xl`}>
                    {days}
                </div>

                <h1 className='text-white'>{"Days"}</h1>
            </div>

            <div className="flex flex-col w-full h-full justify-center items-center gap-y-2">
                <div className={`${rubikFont.className} lg:size-[100px] size-[75px] rounded-2xl bg-white border shadow-sm shadow-gray-800 md:p-4 p-1 flex justify-center items-center text-pink-500  md:text-5xl text-2xl`}>
                    {hours}
                </div>

                <h1 className='text-white'>{"Hours"}</h1>
            </div>

            <div className="flex flex-col w-full h-full justify-center items-center gap-y-2">
                <div className={`${rubikFont.className} lg:size-[100px] size-[75px] rounded-2xl bg-white border shadow-sm shadow-gray-800 md:p-4 p-1 flex justify-center items-center text-pink-500  md:text-5xl text-2xl`}>
                    {minutes}
                </div>

                <h1 className='text-white'>{"Minutes"}</h1>
            </div>

            <div className="flex flex-col w-full h-full justify-center items-center gap-y-2">
                <div className={`${rubikFont.className} lg:size-[100px] size-[75px] rounded-2xl bg-white border shadow-sm shadow-gray-800 md:p-4 p-1 flex justify-center items-center text-pink-500  md:text-5xl text-2xl`}>
                    {seconds}
                </div>

                <h1 className='text-white'>{"Seconds"}</h1>
            </div>

        </div>
    )
}

export default CountdownSegmentComponent