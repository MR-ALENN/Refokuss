import React from 'react'

const Marquee = ({imagesUrls}) => {
    imagesUrls.map(url=>console.log(url));
  return (
    <div className='flex gap-10 py-10 overflow-hidden whitespace-nowrap'>
     {imagesUrls.map(url=><img className='max-w-35 ' src={url} alt="" />)}
     {imagesUrls.map(url=><img className='max-w-35 ' src={url} alt="" />)}

    </div>
  )
}

export default Marquee