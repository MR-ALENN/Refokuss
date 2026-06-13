import React from 'react'

const Marquee = ({imagesUrls}) => {
  return (
    <div className='flex gap-10 py-10 overflow-hidden whitespace-nowrap'>
     {imagesUrls.map((url,index)=><img className='max-w-35 ' key={index} src={url} alt="" />)}
     {imagesUrls.map((url,index)=><img className='max-w-35 ' key={index} src={url} alt="" />)}

    </div>
  )
}

export default Marquee