import React from 'react'
import Marquee from './Marquee'
const Marquees = () => {
   const MarqData = [
     ["https://advantinteractive.com/wp-content/uploads/css-design-awards.png","https://upload.wikimedia.org/wikipedia/commons/f/fa/FreeCodeCamp_logo.svg","https://vectorseek.com/wp-content/uploads/2023/09/Awwwards-Logo-Vector.svg-.png","https://advantinteractive.com/wp-content/uploads/css-design-awards.png","https://upload.wikimedia.org/wikipedia/commons/f/fa/FreeCodeCamp_logo.svg","https://vectorseek.com/wp-content/uploads/2023/09/Awwwards-Logo-Vector.svg-.png"],
     ["https://advantinteractive.com/wp-content/uploads/css-design-awards.png","https://upload.wikimedia.org/wikipedia/commons/f/fa/FreeCodeCamp_logo.svg","https://vectorseek.com/wp-content/uploads/2023/09/Awwwards-Logo-Vector.svg-.png","https://advantinteractive.com/wp-content/uploads/css-design-awards.png","https://upload.wikimedia.org/wikipedia/commons/f/fa/FreeCodeCamp_logo.svg","https://vectorseek.com/wp-content/uploads/2023/09/Awwwards-Logo-Vector.svg-.png"]
   ]
   

  return (
    <div className='w-full mt-10'>
        {MarqData.map(val=><Marquee imagesUrls ={val}/>)}
    </div>
  )
}

export default Marquees