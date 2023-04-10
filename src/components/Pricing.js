import React from "react";
import Card from "./Card";

// importing images from folder gaming platform
import pc from "../images/gaming-platform/pc.png";
import nintendo from "../images/gaming-platform/nintendo-switch.png";
// import ps4Slim from "../images/gaming-platform/ps4-slim.png";
import ps4pro from "../images/gaming-platform/ps4-pro.webp";
import ps5 from "../images/gaming-platform/ps5.jpg";
import xboxSeriesX from "../images/gaming-platform/xbox-series-x.png";
import vr from "../images/gaming-platform/oculus-vr.jpg";
import drivingSimulator from "../images/gaming-platform/driving-simulator.jpg";

export default function Main() {
  let card_forward_list = [
    { platform:"PC", path: pc, price: 70 },
    { platform:"Nintendo", path: nintendo, price: 70 },
    { platform:"PS4 Pro", path: ps4pro, price: 70 },
    { platform:"PS5", path: ps5, price: 70 },
    { platform:"Xbox Series X", path: xboxSeriesX, price: 70 },
    { platform:"VR", path: vr, price: 100 },
    { platform:"Driving Simulator", path: drivingSimulator, price: 100 }
  ];

  return (
    <>
      <div className="mx-auto max-w-screen-lg p-3">
        <div className="text-xl text-semibold text-center">
          Gaming Platforms
          <br/>
          <sub className="text-sm text-slate-400">*charges mentioned are for 30 min per person</sub>
        </div>
        <br />
        <div className="grid justify-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {card_forward_list.map((element, index) => (
            <Card title={element.platform} path={element.path} price={element.price} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
