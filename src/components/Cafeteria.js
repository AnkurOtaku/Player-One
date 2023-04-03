import React from 'react'
import Card from './Card'

export default function Cafeteria() {
  let card_forward_list = ["Snacks", "Drinks", "Shakes", "Combo", "Burgers", "Wraps", "Pizza", "Specials"];

  return (
    <div className='mx-auto grid items-center justify-around grid-cols-4 gap-4 max-w-[1440px]'>
        {card_forward_list.map((element, index) => (
          <Card card_head={element} key={index}/>
        ))}
      </div>
  )
}
