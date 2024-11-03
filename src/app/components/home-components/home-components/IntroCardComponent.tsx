"use client";
import Image from 'next/image'
import { IoCalendarClearSharp, IoLocationSharp } from 'react-icons/io5'
import {
  FaInstagram
} from 'react-icons/fa'
import Countdown from 'react-countdown'
import CountdownSegmentComponent from './CountdownSegmentComponent'

const countDownData = {
  dateTime: "2024-12-28T01:02:03",
  picture: "/images/pictures/7.webp"
};


const IntroCard = () => {
  return (
    <section className='relative w-full h-svh mx-auto p-4 flex justify-center items-center'>
        <Image 
          alt='' src={'/images/pictures/event-bg2.webp'} 
          width={100} height={0} quality={100} priority={true} unoptimized= {true}
          className='absolute left-0 right-0 top-0 bottom-0 h-full w-full object-cover'
          >
        </Image>

        
        
        <div className='md:w-[470px] w-[420px] text-white flex flex-col justify-center items-center gap-y-4 absolute '>

          <div className='md:text-8xl text-6xl flex flex-col'>
            <h1 className='text-center leading-snug capitalize'>
                {`
                    Love
                `}
            </h1>

            <h1 className='md:-mt-10 -mt-5 text-center leading-snug capitalize'>
                {`
                    & Pain
                `}
            </h1>
          </div>


          <a 
            href={`https://www.instagram.com/groove_soothe?igsh=Z2pjaHMxOW54NjB5`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className='flex justify-center items-center gap-x-3'>
            <h1 className="font-bold">
                {"Follow us @"}
            </h1>

            <div className="flex gap-x-4">
                <FaInstagram size={22}/>
            </div>
          </a>



          <div className='md:text-base text-sm gap-x-6 flex justify-between'>
            <div className='flex justify-center items-center gap-x-2'>
              <IoLocationSharp className='size-5'/>
              <h1>
                {`Undisclosed ...`}
              </h1>
            </div>


            <div className='flex justify-center items-center gap-x-2'>
              <IoCalendarClearSharp className='size-5'/>
              <h1>
                {`December 28, 2024`}
              </h1>
            </div>

          </div>


          <ul className='flex flex-col mt-4'>
              <Countdown date={new Date(countDownData.dateTime)} renderer={CountdownSegmentComponent} />
          </ul>


        </div>


    </section>
  )
}

export default IntroCard