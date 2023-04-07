import React from "react";

function Card({ title, path, price }) {
  return (
    <>
      <div
        className="relative rounded-lg overflow-hidden h-32 md:aspect-video shadow-md transition ease-out delay-75 
      hover:-translate-y-0.5 hover:scale-110 hover:shadow-xl hover:shadow-lime-500"
      >
        <img
        className="absolute inset-0 h-full w-full object-cover"
        src={path}
        alt={title}
      />
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white transition-opacity opacity-0 hover:opacity-100">
        <div className="text-lg font-bold">{title}</div>
        <div className="text-xl font-bold">₹{price}</div>
      </div>
      </div>
    </>
  );
}

export default Card;
