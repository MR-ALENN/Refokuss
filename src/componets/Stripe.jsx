import React from 'react'

const Stripe = ({val}) => {
  return (
        <div className='min-w-[16.66%] mt-10 px-4 py-3 border-t border-b border-r border-zinc-700 flex justify-between items-center'>
<img className='max-w-25 object-cover' src={val.url} alt="" />
<span className='font-semibold'>{val.number}</span>
</div>
  )
}

export default Stripe