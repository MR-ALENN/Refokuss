import React from 'react'

const Footer = () => {
  return (
    <div className='w-full py-8'>
<div className='max-w-screen-xl mx-auto flex gap-2'>
    <div className='w-1/2'>
        <h1 className='text-[9.5vw] font-bold'>refokus.</h1>
        <div>
           { ["Privacy Policy","Cookie Policy","Impressum","Terms"].map(elem=><a className='text-[12px] mr-5 text-zinc-500'>{elem}</a>)}
        </div>
    </div>
    <div className='w-1/2 flex mt-20 ml-25 '>
        <div className='w-1/3 flex flex-col  text-[13px] text-zinc-500 gap-1'>
            <h1 className='mb-7'>Socials</h1>
            {["Instagram","Twitter (X?)","LinkedIn"].map(elem=><a>{elem}</a>)}
        </div>
        <div className='w-1/3 flex flex-col  text-[13px] gap-1 '>
            <h1 className='mb-7'>Sitemap</h1>
            {["Home","Work","Careers","Contact"].map(elem=><a>{elem}</a>)}
        </div>
        <div className='w-1/3 flex flex-col  text-[13px] text-right gap-10'>
           <h1>Refokus is a pioneering digital <br /> agency driven by design and <br />empowered by technology.</h1>
           <img src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt="" />
        </div>
    </div>
</div>
    </div>
  )
}

export default Footer