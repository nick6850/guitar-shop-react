import React from "react";
import data from "../data";
import Item from "./Item";
import { useSearchParams } from "react-router-dom";

function ItemsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const guitars = searchParams?.get("type")
    ? data.filter((item) => item.type === searchParams.get("type"))
    : data;

  return (
    <>
      <div className="m-3 mb-1 text-right">
        <button
          onClick={() => setSearchParams({ type: "electric" })}
          className=" rounded bg-gray-500 px-5  text-white"
        >
          Electric
        </button>
        <button
          onClick={() => setSearchParams({ type: "acoustic" })}
          className="ml-2 rounded bg-gray-500 px-5  text-white"
        >
          Acoustic
        </button>
        <button
          onClick={() => setSearchParams()}
          className="ml-2 mr-5 rounded  bg-gray-500 px-5 text-white"
        >
          Clear filters
        </button>
      </div>
      <div className="w-screen grid-cols-2 md:grid xl:grid-cols-3">
        {guitars.map((guitar) => {
          return <Item key={guitar.id} {...guitar} />;
        })}
      </div>
    </>
  );
}

export default ItemsList;
