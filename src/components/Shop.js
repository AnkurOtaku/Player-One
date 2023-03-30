import React from 'react'
import Card from './Card'

function Shop() {
  return (
    <div className='m-4 grid items-center justify-around grid-cols-4 gap-4'>
          <Card card_head={"Game Passes"}/>
          <Card card_head={"Console"}/>
          <Card card_head={"Controllers"}/>
          <Card card_head={"PlayStation Games"}/>
          <Card card_head={"Xbox Games"}/>
      </div>
  )
}

export default Shop