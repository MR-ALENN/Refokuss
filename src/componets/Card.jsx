import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import Button from './Button'
const Card = ({width,start,para,t,t2,hover}) => {
  return (
    <div className={`${width} bg-zinc-800 p-5 rounded-xl flex flex-col justify-between hover:${hover}` }>
      <div className='w-full'>
         <div className='w-full flex justify-between items-center' >
        <h6 className='text-[13px]'>{t}</h6>
       < HiArrowLongRight />
      </div>
      <h3 className='mt-5 font-semibold  text-2xl'>{t2 ==true ?"Who we are":(<>Let's get to it,<br/>together</>)}</h3>
       </div>
    <div className='down w-full mt-40'>
  {start && <>
      <h1 className='text-6xl font-semibold tracking-tight leading-none  mb-5'>Start a Project</h1>
    <button className='rounded-full mt-5 py-2 px-5 border border-zinc-50'>Contact Us</button></>}
      {para && <p className=' text-sm font-medium text-[12px] text-zinc-500'>Explore what drives our team.</p>}
     </div>
     
    </div>
  )
}

export default Card