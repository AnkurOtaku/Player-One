import React from "react";

const ContactUs = () => {
  return (
    <>
      <br />
      <br />
      <div className="bg-black text-white pb-5" id="ContactUs">
        <div className="mx-auto grid grid-cols-2 gap-4 max-w-[1440px] p-3">
          <div className="flex flex-col items-center">
            <p className="font-semibold text-lg hover:text-red-500">
              Contact Us
            </p>
            <br />
            <a
              className="hover:text-green-400"
              href="https://wa.me/+917988189689"
            >
              WhatsApp
            </a>
            <br />
            <a
              className="hover:text-pink-600"
              href="https://instagram.com/player_one_mt"
            >
              Instagram
            </a>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-lg hover:text-green-500">
              Directions
            </p>
            <br />
            <a
              className="hover:text-blue-400"
              href="https://goo.gl/maps/EoucpzAAmEBZsFFs9"
            >
              Model Town
            </a>
            <br />
            <a
              className="hover:text-lime-400"
              href="https://goo.gl/maps/KVsLd7TRoY45aJ4j8"
            >
              MG Mall
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
