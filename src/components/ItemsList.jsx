import React from "react";
import data from "../data";
import Item from "./Item";
import { useSearchParams } from "react-router-dom";

function ItemsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const items = searchParams?.get("type")
    ? data.filter((item) => item.type === searchParams.get("type"))
    : data;

  return (
    <div>
      <div className="m-3 mb-1 flex items-center justify-center gap-1 lg:justify-end">
        <button
          onClick={() => setSearchParams({ type: "electric" })}
          className=" rounded bg-gray-500 px-5  text-white"
        >
          Electric
        </button>
        <button
          onClick={() => setSearchParams({ type: "acoustic" })}
          className="rounded bg-gray-500 px-5  text-white"
        >
          Acoustic
        </button>
        <button
          onClick={() => setSearchParams({ type: "accessory" })}
          className=" rounded bg-gray-500 px-5  text-white"
        >
          Accessories
        </button>
        <button
          onClick={() => setSearchParams()}
          className="mr-5 rounded bg-gray-500  px-5 text-white"
        >
          Clear filters
        </button>
      </div>
      <div className="w-screen grid-cols-2 md:grid xl:grid-cols-3">
        {items.map((guitar) => {
          return <Item key={guitar.id} {...guitar} />;
        })}
      </div>
    </div>
  );
}

export default ItemsList;
