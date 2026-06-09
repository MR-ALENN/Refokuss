import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
const NavBar = () => {
  return (
   <>
   
    <div className="max-w-5xl mx-auto py-6 flex items-center justify-between border-b border-zinc-700">
   <div className="nleft flex  items-center">
     <img className="w-22 h-10 rounded-full" src="https://assets-global.website-files.com/6024cb0edb66de5e830d3665/60343177940d0b566d3991b7_og.png" alt=""  />
    <div className="links flex gap-15 ml-20">
      {["Home","Work","Culture","","News"].map((elem,index) => (
      elem.length === 0 ?( <span className='w-0.5 h-7 bg-zinc-500'></span>) : (  <a className="text-sm flex items-center gap-1" href='#'>
          {index === 1 && (<span className='inline-block w-1 h-1 rounded-full bg-green-400 '></span>) }  
          {elem}</a>)
      ))}
    </div>
   </div>
   <Button />
   </div>
   

   </>
  ) 
}

export default NavBar