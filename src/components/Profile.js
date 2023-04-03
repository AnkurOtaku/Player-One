import React from 'react';
import Card from './Card';

export default function Profile() {
  let card_forward_list = ["Instagram","Twitter","YouTube","WhatsApp","SnapChat","TikTok"];

  return (
    <div className='m-4 grid items-center justify-around grid-cols-4 gap-4'>
      {card_forward_list.map((element, index) => (
        <Card card_head={element} key={index}/>
      ))}
    </div>
  );
}
