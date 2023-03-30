import React from 'react'
import Card from './Card'

export default function Cafeteria() {
  return (
    <div className='m-4 grid items-center justify-around grid-cols-4 gap-4'>
          <Card card_head={"Snacks"}/>
          <Card card_head={"Drinks"}/>
          <Card card_head={"Shakes"}/>
          <Card card_head={"Combo"}/>
          <Card card_head={"Burgers"}/>
          <Card card_head={"Wraps"}/>
          <Card card_head={"Pizza"}/>
          <Card card_head={"Specials"}/>
      </div>
  )
}
