import React from 'react'

import Product from './Product'
const Products = () => {
   const products_data=[
     {
    name: "artiquel",
    desc: "An artistic and unique puzzle game that combines creativity with problem-solving mechanics, offering immersive visual experiences",
    case: false
  },
  {
    name: "TTRL",
    desc: "A fast-paced action-adventure game featuring challenging levels, dynamic gameplay, and thrilling combat sequences",
    case: false
  },
  {
    name: "BOBA",
    desc: "An interactive story-driven game with captivating narrative, memorable characters, and choices that impact the storyline",
    case: true
  },
  {
    name: "GOW",
    desc: "An epic action-adventure game featuring powerful combat mechanics, mythological elements, and intense boss battles",
    case: true
  },
  {
    name: "Jensi",
    desc: "A charming indie game with unique art style, engaging gameplay mechanics, and heartwarming narrative elements",
    case: false
  },
  {
    name: "CLaude",
    desc: "A sophisticated puzzle-strategy game that challenges players with complex scenarios, tactical thinking, and innovative gameplay loops",
    case: true
  } 
  ]
  return (
    <div className='w-full mt-15'>
      {products_data.map((elem,index)=>(<Product key={index}  val={elem} />))}
       
    </div>

  )
}

export default Products