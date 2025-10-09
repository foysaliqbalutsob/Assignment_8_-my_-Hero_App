import React, { useEffect, useState } from "react";
import like from "../assets/like_img.png";
import download from "../assets/download.png";
import star from "../assets/Star.png";
import Swal from "sweetalert2";

const Installation = () => {
  const [wishlist, setWishlist] = useState([]);
  const [sortedWishlist, setSortedWishlist] = useState([]);
  const [sortType, setSortType] = useState("");
  

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedList);
    setSortedWishlist(savedList);
    
  }, []);

  useEffect(() => {
    let sorted = [...wishlist];
    if (sortType === "price-asc") sorted.sort((a, b) => a.size - b.size);
    else if (sortType === "price-desc") sorted.sort((a, b) => b.size - a.size);
    else if (sortType === "name")
      sorted.sort((a, b) => a.title.localeCompare(b.title));

    setSortedWishlist(sorted);
    
  }, [sortType, wishlist]);

  const handleRemove = (id) => {
    const updatedList = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedList);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
    Swal.fire("App is uninstalled!");
  };

  if (wishlist.length === 0) {
    return (
      <h2 className="text-center text-xl mt-6">Your Installation is empty </h2>
    );
  }

  return (
    <div className="bg-cyan-50 ">
      <div className=" bg-cyan-50  py-20 max-w-7xl mx-auto ">

         <div className="flex justify-center items-center pt-15 pb-5 text-4xl font-bold">
          <h1>Your Installed  Applications</h1>
        </div>

         <div className="flex justify-center items-center  text-[rgba(98,115,130,1)]">
          <h1>
            Explore All Apps on the Market developed by us. We code for Millions
          </h1>
        </div>







        <div className="">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">
              
              ({wishlist.length}) App found
            </h1>
            <select
              className="select select-bordered w-60"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="price-asc">Size: Low to High</option>
              <option value="price-desc">Size: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          <div className="">
            {sortedWishlist.map((product) => (
              <div key={product.id} className=" bg-base-100  shadow-sm mb-10">
                <div className=" ">
                  <div className=" flex justify-between items-center   p-4 ">
                    <div className=" flex gap-6  ">
                      <div className=" flex justify-center items-center">
                        <img className="h-15  " src={product.image} alt="" />
                      </div>
                      <div className="">
                        <h2>{product.title}</h2>
                        <div>
                          <div className="flex gap-15 mt-5">
                            <div>
                              <img className="h-5" src={download} alt="" />

                              <p>{product.downloads}</p>
                            </div>
                            <div>
                              <img className="h-5" src={star} alt="" />

                              <p>{product.ratingAvg}</p>
                            </div>

                            <div>
                              <img className="h-5" src={like} alt="" />

                              <p>{product.reviews}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn btn-sm btn-outline btn-error"
                      onClick={() => handleRemove(product.id)}
                    >
                      UnInstall
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
