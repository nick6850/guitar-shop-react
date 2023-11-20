import React, { useContext } from "react";
import { GuitarContext } from "../Context/GuitarContext";

function ShoppingCart() {
  const { remove_item, state } = useContext(GuitarContext);

  if (state.items.length === 0) {
    return (
      <h1 className="mt-10 text-center text-3xl font-bold">
        You haven't added any items yet.
      </h1>
    );
  }

  return (
    <div className="m-auto w-screen flex-col md:max-w-xl">
      {state.items.map((item) => {
        return (
          <div
            key={item.id}
            className="mt-3 flex max-w-xl items-center gap-10 border p-3 text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-12 flex-1 object-contain"
            />
            <div>
              <div className="font-bold">{item.name}</div>
              <div>(${item.price})</div>
            </div>
            <button
              onClick={() => remove_item(item.id)}
              className="cursor-pointer rounded bg-violet-700 px-3 py-1 text-sm  font-semibold text-white transition-colors duration-300 ease-in hover:bg-violet-600"
            >
              Remove item
            </button>
          </div>
        );
      })}
      <div className="mr-3 mt-4 flex justify-end text-xl">
        Total : <span className="font-bold">${state.total}</span>
      </div>
    </div>
  );
}

export default ShoppingCart;
