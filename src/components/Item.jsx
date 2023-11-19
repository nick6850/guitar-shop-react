import React, { useContext, useState } from "react";
import { GuitarContext } from "../Context/GuitarContext";
import { nanoid } from "nanoid";

export default function Item(props) {
  const { add_item } = useContext(GuitarContext);
  const [hasBeenAdded, setHasBeenAdded] = useState(false);

  return (
    <div className=" relative mx-4 mt-3 flex max-w-2xl flex-col justify-between border border-gray-500 px-7 py-3">
      <img
        src={props.image}
        alt={props.name}
        className="max-h-48 object-contain"
      />
      <div className="mt-5 font-bold uppercase">{props.name}</div>
      <div className=" font-mono tracking-tighter">{props.description}</div>
      <div className="mt-3 self-end">
        <div className="text-center text-2xl font-bold">${props.price}</div>
        <button
          onClick={() => {
            add_item({ ...props, id: nanoid() });
            setHasBeenAdded(true);
            setTimeout(() => setHasBeenAdded(false), 1000);
          }}
          className="mt-0 cursor-pointer rounded bg-violet-700  px-3 py-1 text-sm  font-semibold text-white transition-colors duration-300 ease-in hover:bg-violet-600"
        >
          Add to cart
        </button>
        <div
          className={`${
            hasBeenAdded ? "opacity-100" : "opacity-0"
          } absolute bottom-1/2 left-0 right-0 top-1/2 m-auto h-max w-max bg-black bg-opacity-30 px-4 font-bold text-white transition-opacity duration-300 ease-in`}
        >
          Item has been added!
        </div>
      </div>
    </div>
  );
}
