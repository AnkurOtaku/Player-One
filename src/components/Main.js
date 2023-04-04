import React from "react";
import Card from "./Card";

export default function Main() {
  let card_forward_list = [
    "PC",
    "Nintendo",
    "PS4",
    "PS4 Pro",
    "PS5",
    "Xbox Series X",
    "VR",
    "Driving Simulator",
  ];

  return (
    <>
      <div className="mx-auto max-w-[1440px] px-3">
        <p className="text-xl text-semibold text-center">Available Gaming Platforms</p>
        <br />
        <div className="grid items-center justify-around grid-cols-2 md:grid-cols-4 gap-4">
          {card_forward_list.map((element, index) => (
            <Card card_head={element} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
