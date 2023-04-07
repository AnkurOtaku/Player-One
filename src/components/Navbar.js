import React from 'react';

const Navbar = () => {

  return (
    <nav className="z-50 bg-black text-xl text-white sticky top-0 w-full">
      <div className="container mx-auto flex items-center justify-between max-w-[1440px] py-2 px-5 md:px-10">
        <img src='' alt='Player One Logo' className="h-10 w-10 hover:bg-lime-500"/>
        <p className='px-3 py-2 rounded-xl hover:bg-lime-500 hover:text-black'>Player One</p>
        <img src='' alt='' className="hidden md:block h-10 w-10 hover:bg-lime-500"/>
      </div>
    </nav>
  );
};

export default Navbar;