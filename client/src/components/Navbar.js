import React from "react";

const Navbar = () => {
  return (
    <nav className="z-50 bg-black text-xl text-white sticky top-0 w-full">
      <div className="container mx-auto flex items-center justify-between max-w-[1440px] py-2 px-5 md:px-10">
        <span className="material-symbols-outlined flex items-center h-10 w-10">stadia_controller</span>
        <p className="px-3 py-2 rounded-xl font-sedgwick hover:bg-lime-500 hover:text-black">
          Player One
        </p>
        <span className="material-symbols-outlined flex items-center h-10 w-10">counter_1</span>
      </div>
    </nav>
  );
};

export default Navbar;
