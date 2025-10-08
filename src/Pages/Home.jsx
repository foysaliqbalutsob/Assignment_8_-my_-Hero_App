import React from "react";
import { Link } from "react-router";
import playStore from "../assets/Play_store.png";
import appStore from "../assets/App_store.png";
import hero from "../assets/hero.png";
import useProducts from "../Hook/useApp";

const Home = () => {

    const {products, loading, error} = useProducts() ;
    if (loading) return <p>Loading products...</p>;
    console.log(products, loading, error)
  return (
    

    <div className=" bg-cyan-50 ">
      <div className=" py-10">
        <div className=" flex justify-center items-center">
          <h1 className="text-7xl font-semibold ">We Build </h1>
        </div>
        <div className=" flex justify-center items-center mt-3">
          <h1 className="text-7xl font-semibold ">
            <span className=" text-blue-500 ">Productive</span> Apps
          </h1>
        </div>
        <div className="flex justify-center items-center my-5 ">
          <h1 className="font-400 text-[18px] text-slate-500  text-center ">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br /> Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </h1>
        </div>
        <div className=" flex justify-center gap-4">
          <Link
            to="https://play.google.com/store/games?hl=en"
            className="btn btn-soft btn-secondary"
          >
            {" "}
            <img src={playStore} alt="" />
            Google Play
          </Link>
          <Link
            to="https://www.apple.com/app-store/"
            className="btn btn-soft btn-secondary"
          >
            <img src={appStore} alt="" />
            App Store
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={hero} alt="" />
      </div>
      <div>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white py-10">
          <h2 className="text-3xl font-bold text-center mb-8">
            Trusted By Millions, Built For You
          </h2>

          <div className="stats  flex justify-center gap-8 text-white">
            <div >
              <div className="text-[13px]">Total Downloads</div>
              <div className="stat-value">29.6M</div>
              <div className="text-[13px]">21% More Than Last Month</div>
            </div>

            <div >
              <div className="text-[13px]">Total Reviews</div>
              <div className="stat-value">906K</div>
              <div className="text-[13px]">46% More Than Last Month</div>
            </div>

            <div >
              <div className="text-[13px]">Active Apps</div>
              <div className="stat-value">132+</div>
              <div className="text-[13px]">31 More Will Launch</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
