import React, { useState } from "react";
import { Link, useParams } from "react-router";
import useProducts from "../Hook/useApp";
import LoadingAPI from "../Component/LoadingAPI/LoadingAPI";
import like from "../assets/like_img.png";
import download from "../assets/download.png";
import star from "../assets/Star.png";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Swal from "sweetalert2";

const AppDetails = () => {
  const [install, setInstall] = useState(false);
  const { id } = useParams();
  console.log(id);

  const { products, loading, error } = useProducts();
  if (loading) return <LoadingAPI></LoadingAPI>;
  console.log("products", products);

  const product = products.find((p) => p.id == id);
  console.log(product);

  const {
    companyName,
    image,
    downloads,
    reviews,
    ratings,
    size,
    description,
    title,
    ratingAvg,
  } = product;

  console.log(ratings);

  const handleAddToWishlist = () => {
    const existingList = JSON.parse(localStorage.getItem("wishlist"));
    console.log(existingList);
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === product.id);
      if (isDuplicate) return Swal.fire("Sorry");
      updatedList = [...existingList, product];
    } else {
      updatedList.push(product);
    }
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
    console.log(updatedList);
    Swal.fire("App is installed!");
    setInstall(true);
  };

  return (
    <div className="bg-base-200 py-20">
      <div className="bg-base-200 min-h-screen flex justify-center  py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 w-11/12">
          <div className="md:col-span-1 flex justify-center">
            <img src={image} className=" h-80 rounded-lg " />
          </div>

          <div className="md:col-span-2 flex flex-col justify-start">
            <h1 className="text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg mb-3">
              Developed By: <span className="text-blue-500">{companyName}</span>
            </p>
            <hr />
            <div>
              <div className="flex gap-15 mt-5">
                <div>
                  <img className="h-10" src={download} alt="" />
                  <h1>Downloads:</h1>
                  <p className="text-3xl md:text-[40px] font-extrabold">
                    {downloads}
                  </p>
                </div>
                <div>
                  <img className="h-10" src={star} alt="" />
                  <h1>Average Rating</h1>
                  <p className="text-3xl md:text-[40px] font-extrabold">
                    {ratingAvg}
                  </p>
                </div>

                <div>
                  <img className="h-10" src={like} alt="" />
                  <h1>Total Reviews</h1>
                  <p className="text-3xl md:text-[40px] font-extrabold">
                    {reviews}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleAddToWishlist}
              disabled={install}
              className="mt-8 bg-[rgba(0,211,144,1)] hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              {install ? "Installed" : ` Install Now ( ${size} MB)`}
            </button>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={ratings}
            margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="count"
              fill="#00C49F"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
              name="User Ratings"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h2>Description:</h2>
        <h2>{description}</h2>
      </div>
    </div>
  );
};

export default AppDetails;
