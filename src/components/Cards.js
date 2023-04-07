// import React from 'react';

// function Cards({ title, path, price }) {
//   return (
//     <div className="relative rounded-md overflow-hidden h-32 aspect-video transition-shadow duration-300 ease-out hover:shadow-lg">
//       <div
//         className="absolute inset-0 bg-cover bg-center w-full h-full filter brightness-100 hover:brightness-75 transition-all duration-300 ease-out"
//         style={{ backgroundImage: `url(${path})` }}
//       ></div>
//       <div className="absolute bottom-0 w-full h-1/2 bg-black bg-opacity-75 flex justify-center items-center transform translate-y-full hover:translate-y-0 transition-all ease-out">
//         <div className="text-white text-center">
//           <h2 className="text-lg font-bold">{title}</h2>
//           <p className="text-md font-medium">₹{price}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;

import React from 'react';

function Cards({ title, path, price }) {
  return (
    <div className="relative rounded-lg overflow-hidden h-32 aspect-video shadow-lg bg-white">
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
  );
}

export default Cards;