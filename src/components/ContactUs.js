import React from "react";

const ContactUs = () => {
  return (
    <>
      <br />
      <br />
      <div className="bg-black text-white" id="ContactUs">
        <div className="mx-auto grid grid-cols-3 gap-4 max-w-[1440px] p-3">
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
              href="https://instagram.com/ankurotaku"
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
              className="hover:text-red-400"
              href="https://goo.gl/maps/EoucpzAAmEBZsFFs9"
            >
              Google Maps
            </a>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-lg hover:text-blue-500">
              Payment QR Code
            </p>
            <br />
            <img className="" src="" alt="QR-code" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
