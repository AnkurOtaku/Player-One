import React from "react";
import ps5 from "./spidy.jpg";

function Card(props) {
  return (
    <>
      <div
        className="border rounded-lg overflow-hidden h-32 shadow-md transition ease-in-out delay-150 
      hover:-translate-y-0.5 hover:scale-110 hover:shadow-xl hover:shadow-lime-500"
      >
        <img src={ps5} alt="Loading" className="object-cover h-full w-full" />
        <div className="hidden hover:bg-opacity-30 hover:block h-full w-full bg-lime-600">{props.card_head}</div>
      </div>
    </>
  );
}

export default Card;
