import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
const Button = ({title="Get Started"}) => {
  return (
  <>
  <div className='w-40 px-3 py-1.5  bg-zinc-200 text-black rounded-full flex justify-between items-center'>
    <span className='text-sm font-medium'>{title}</span>
<IoIosReturnRight />    
  </div>
  </>
  )
}

export default Button