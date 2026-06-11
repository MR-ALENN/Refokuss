import React from 'react'
import Card from './Card'
const Cards = () => {
  return (
    <div className='w-full mt-10 py-10'>
        <div className='max-w-screen-xl mx-auto flex gap-2'>
        <Card className='w-[30%] py-50 bg-red-300 rounded-xl' />
        <Card className='w-[70%] py-50 bg-red-500 rounded-xl' />
        </div>
    </div>
  )
}

export default Cards