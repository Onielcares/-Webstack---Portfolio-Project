import React, { useState } from "react";
import camera from "../../assets/camera.jpg";
import "./card.scss";

export default function Card(props) {
  const [show, setShow] = useState(false);

  return (
    <div className={`w-52 relative `}>
      <div className="h-36 rounded-t-lg">
        <img
          src={camera}
          alt={props.alt}
          className="w-full h-full rounded-t-lg"
        />
      </div>
      <div className="bg-white rounded-b-lg px-4 md:p-2 h-44 flex flex-col gap-2 justify-center items-center">
        <p className="text-lg md:text-xl font-medium">{props.product}</p>
        <p
          className="text-xs underline text-purple cursor-pointer"
          onClick={() => setShow(!show)}
        >
          {show ? "Show less" : "Show more"}
        </p>
      </div>
      <div
        className={`top-0 left-0 absolute flex-col gap-2 bg-white w-52 rounded-lg shadow-lg shadow-purple p-4 md:p-2 transition-all ease-in-out duration-1000 ${
          show ? "custom_animate_in" : "custom_animate_out"
        } `}
      >
        <p className="break-words">{props.category}</p>
        <div>
          <p className="font-medium text-sm">Stores</p>
          <a
            href="https://www.google.com/"
            target="_blank"
            className="flex flex-col gap-2 break-words"
          >
            {" "}
            {props.store}
          </a>
        </div>
      </div>
    </div>
  );
}
