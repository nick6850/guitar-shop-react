import React from "react";

export default function Item({ id, image, name, description, price }) {
  return (
    <div className=" mx-4 mt-3 flex max-w-2xl flex-col justify-between border border-gray-500 px-7 py-3">
      <img src={image} alt={name} />
      <div className="font-bold uppercase">{name}</div>
      <div className=" font-mono tracking-tighter">{description}</div>
      <div className="mt-3 self-end">
        <div className="text-center text-2xl font-bold">${price}</div>
        <button className="mt-0 cursor-pointer rounded bg-violet-700  px-3 py-1 text-sm  font-semibold text-white transition-colors duration-300 ease-in hover:bg-violet-600">
          Add to cart
        </button>
      </div>
    </div>
  );
}
