import React from 'react'
import Card from './Card'

export default function Main() {
  let card_forward_list = ["PC","Nintendo","PS5","PS4","Xbox Series X","Xbox Series S","VR","Sterring Wheel"]

  return (
    <>
      <div className='mx-auto grid items-center justify-around grid-cols-4 gap-4 max-w-[1440px]'>
        {card_forward_list.map((element) => (
          <Card card_head={element} />
        ))}
      </div>
    </>
  )
}
