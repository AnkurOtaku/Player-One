import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing MG MALL branch pics

import entryImage from "../images/mg-mall/entry.jpg";
import console_area_half from "../images/mg-mall/console-area-half.jpg";
import console_area from "../images/mg-mall/console-area.jpg";
import pc_area from "../images/mg-mall/pc-area.jpg";

// Importing Model town branch pics

import console_setup from "../images/model-town/console-setup.png";
import driving_simulator_setup from "../images/model-town/driving-simulator-setup.jpg";
//import wanted_posters from "../images/model-town/wanted-posters.jpg";
import pc_setup from "../images/model-town/pc-setup.png";
import player_one_screen from "../images/model-town/player-one-screen.png";
import group_of_five from "../images/model-town/group-of-five.jpg";

const mg_mall_branch_images = [
  { src: entryImage },
  { src: console_area_half },
  { src: console_area },
  { src: pc_area },
];

const model_town_branch_images = [
  { src: console_setup },
  { src: driving_simulator_setup },
  { src: pc_setup },
  { src: player_one_screen },
  { src: group_of_five },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  swipeToSlide: true,
  pauseOnHover: false,
};

const Carousel = () => {
  const [nav1, setNav1] = useState(null);
  const [images, setImages] = useState(mg_mall_branch_images);
  // const [active, setActive] = useState("mg_mall");

  return (
    <>
      <div className="flex justify-center my-3">
        <button
          className="border mx-4 p-3 rounded-lg transition-colors active:bg-lime-400"
          onClick={()=>{setImages(mg_mall_branch_images)}}
        >
          MG Mall Branch
        </button>
        <button
          className="border mx-4 p-3 rounded-lg transition-colors active:bg-lime-400"
          onClick={()=>{setImages(model_town_branch_images)}}
        >
          Model Town Branch
        </button>
      </div>
      <div className="max-w-screen-lg mx-auto my-4 overflow-x-hidden md:max-w-2xl">
        <Slider {...settings} asNavFor={nav1} ref={(slider) => setNav1(slider)}>
          {images.map((image, index) => (
            <div key={index} className="object-cover">
              <img
                src={image.src}
                loading="lazy"
                alt={`Entry ${index}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
