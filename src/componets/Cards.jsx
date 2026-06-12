import React from 'react'
import Card from './Card'
const Cards = () => {
  return (
    <div className='w-full mt-10 py-10'>
        <div className='max-w-screen-xl mx-auto flex gap-1'>
    <Card width={"basis-1/3"} t={"Up Next: Culture"} t2={true} start={false} para={true} />
    <Card width={"basis-2/3"} t={"Get In Touch"} start={true} para={false} hover={"bg-violet-600"}/>
        </div>
    </div>
  )
}

export default Cards