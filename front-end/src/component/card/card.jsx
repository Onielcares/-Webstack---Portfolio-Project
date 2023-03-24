import React, { useState } from "react";
import camera from "../../assets/camera.jpg";
import "./card.scss";

export default function Card(props) {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`w-56 relative shadow-xl hover:shadow-2xl rounded-lg border-t border-purple border-opacity-10`}
    >
      <div className="h-36 rounded-t-lg">
        <img
          src={props.src}
          alt={props.alt}
          className="w-full h-full rounded-t-lg"
        />
      </div>
      <div className="bg-white rounded-b-lg px-4 md:px-5 md:py-2 h-48 flex flex-col gap-2 justify-center items-center">
        <p className="text-sm md:text-md font-medium">{props.product}</p>
        <p
          className="text-xs underline text-purple cursor-pointer"
          onClick={() => setShow(!show)}
        >
          {show ? "Show less" : "Show more"}
        </p>
      </div>
      <div
        className={`top-0 left-0 absolute flex flex-col gap-5 bg-white w-56 rounded-lg shadow-lg shadow-purple p-4 md:p-2 transition-all ease-in-out duration-1000 ${
          show ? "custom_animate_in" : "custom_animate_out"
        } `}
      >
        <div className=" flex flex-col gap-2 text-sm text-right">
          {props.category}
        </div>

        <div>
          <p className="font-medium text-lg">Stores</p>
          <div className="flex gap-2 text-purple flex-wrap justify-center">
            {props.store}
          </div>
        </div>
      </div>
    </div>
  );
}
