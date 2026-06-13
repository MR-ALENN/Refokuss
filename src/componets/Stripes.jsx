import React from 'react'
import Stripe from './Stripe'
const Stripes = () => {
    const data = [{url:"https://advantinteractive.com/wp-content/uploads/css-design-awards.png",number:48},
        {url:"https://upload.wikimedia.org/wikipedia/commons/f/fa/FreeCodeCamp_logo.svg", number:2},
        {url:"https://vectorseek.com/wp-content/uploads/2023/09/Awwwards-Logo-Vector.svg-.png", number:11},
        {url:"https://advantinteractive.com/wp-content/uploads/css-design-awards.png",number:48},
        {url:"https://upload.wikimedia.org/wikipedia/commons/f/fa/FreeCodeCamp_logo.svg", number:2},
        {url:"https://vectorseek.com/wp-content/uploads/2023/09/Awwwards-Logo-Vector.svg-.png", number:11}    
    ]
  return (
    <div className='flex items-center'>
       { data.map((elem,index)=><Stripe key={index}  val={elem} />)}
      
    </div>
  )
}

export default Stripes