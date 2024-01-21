import React from "react";
import Card from "./Card";

import food from "../images/facilities/food.png";
import hygiene from "../images/facilities/hygiene.jpg";
import comfort from "../images/facilities/comfort.jpg";
import assitance from "../images/facilities/assistance.jpg";
import flagship from "../images/facilities/flagship.webp";
import money from "../images/facilities/money.png";

export default function Facilities() {
  let facilities_list = [
    { title:"Mouth Watering Food", path: food },
    { title:"Regular Hygiene", path: hygiene },
    { title:"Comfortable Couches", path: comfort },
    { title:"Assitance In Games", path: assitance },
    { title:"High End Platforms", path: flagship },
    { title:"Pocket Friendly Charges", path: money }
  ];

  return (
    <>
      <div className="mx-auto max-w-screen-lg p-3">
        <div className="text-xl text-semibold text-center">
          Facilities
          <br/>
        </div>
        <br />
        <div className="grid justify-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {facilities_list.map((element, index) => (
            <Card title={element.title} path={element.path} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}