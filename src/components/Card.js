import React from "react";

function Card(props) {
  return (
    <>
      <div className="border rounded-lg h-32 drop-shadow-md hover:drop-shadow-xl">
        <img src="./spidy.jpg" alt="Loading" className="h-2/3 w-full" />
        <div className="text-center">{props.card_head}</div>
      </div>
    </>
  );
}

export default Card;
