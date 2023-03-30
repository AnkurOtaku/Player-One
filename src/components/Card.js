import React from 'react'

function Card(props) {
  return (
    <>
      <div className='border p-1 rounded-lg aspect-square'>
        <img src='./spidy.jpg' alt='Loading' className='h-2/3 w-full'/>
        <div className='text-center'>{props.card_head}</div>
      </div>
    </>
  )
}

export default Card