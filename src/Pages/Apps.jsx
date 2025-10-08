import React, { useState } from "react";
import LoadingAPI from "../Component/LoadingAPI/LoadingAPI";
import useProducts from "../Hook/useApp";
import AllApplication from "./AllApplication";
import NoAppFound from "./NoAppFound";

const Apps = () => {
  const [search, setSearch] = useState("");

  const { products, loading, error } = useProducts();
  if (loading) return <LoadingAPI></LoadingAPI>;
  console.log(products, loading, error);

  console.log(search);

  const searchWord = search.trim().toLocaleLowerCase();
  console.log(searchWord);

  const searchApp = searchWord
    ? products.filter((product) =>
        product.title.toLocaleLowerCase().includes(searchWord)
      )
    : products;

  console.log(searchApp);

  return (
    <div className="bg-cyan-50 pt-15 pb-20">
      <div>
        <div className="flex justify-center items-center pt-15 pb-5 text-4xl font-bold">
          <h1>Our All Applications</h1>
        </div>

        <div className="flex justify-center items-center  text-[rgba(98,115,130,1)]">
          <h1>
            Explore All Apps on the Market developed by us. We code for Millions
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-between my-7">
        <h1 className="text-2xl font-bold">
          All Products
          <span className="text-sm text-gray-500">
            ({searchApp.length}) Products found
          </span>
        </h1>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
            placeholder="Search"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  my-15 max-w-7xl lg:grid-cols-4 gap-5 mx-auto">
        {searchApp.length > 0 ? (
          searchApp.map((product) => (
            <AllApplication key={product.id} product={product}></AllApplication>
          ))
        ) : (
          <NoAppFound className='flex flex-col justify-center items-center border ' search= {search} ></NoAppFound>
        )}
      </div>
    </div>
  );
};

export default Apps;
