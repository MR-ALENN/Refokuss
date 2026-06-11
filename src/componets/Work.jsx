import React from 'react'
import { ImGift } from 'react-icons/im'

const Work = () => {
    const images = [
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d713cb10965e8dbdee18_YIR%202021%20-%204%203.webp",top:"42%",left:"60%",isActive:false},
        {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzgMPhNRLEscD2F2mKsBHa3SUhgnvN9g52QA&s",top:"45%",left:"55%",isActive:false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/667c85a1151f26218228b9d3_Refokus.png",top:"55%",left:"45%",isActive:false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d713cb10965e8dbdee18_YIR%202021%20-%204%203.webp",top:"47%",left:"53%",isActive:false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b216eeb2587178cacfc781_macbook-16-pro-mockup-on-concrete-background-front-view.webp",top:"60%",left:"52%",isActive:false},
        {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHIsZV72fWyQtJtBJwusy9eoLdWxN4E6juw&s",top:"70%",left:"57%",isActive:false},
    ]
  return (
    <div className='w-full'>
        <div className='relative max-w-6xl mx-auto flex justify-center items-center '>
            <h1 className='text-[30vw] font-medium select-none leading-none'>Work</h1>
        <div className='absolute w-full h-full top-0 translate-x-[-10%] translate-y-[-10%]'>
          { images.map((elem,index)=>(elem.isActive && ( <img className=" absolute w-60 rounded-xl" src={elem.url} style={{top:elem.top,left:elem.left}} />)))}
        </div>
        </div>
    </div>
  )
}

export default Work