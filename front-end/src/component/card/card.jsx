import React from 'react'

export default function Card(props) {
  return (
    <div className='w-40'>
      <div className='h-36 bg-black rounded-t-lg'></div>
      <div className='flex flex-col gap-8 bg-white rounded-b-lg p-2'>
        <p className='text-xl font-medium'>{props.product}</p>
        <p className='text-sm'>Price: {props.price}</p>
      </div>
    </div>
  )
}
