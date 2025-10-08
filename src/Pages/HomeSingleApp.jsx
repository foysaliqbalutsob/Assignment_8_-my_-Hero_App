import React from "react";
import star from '../assets/Star.png'
import download from '../assets/download.png'

const HomeSingleApp = ({ featureProduct}) => {
  console.log(featureProduct);
  const { companyName, image, downloads, reviews, size, title, ratingAvg, id } =
    featureProduct;
  return (
    <div className=" w-80">
      <div className="">
        <div className="card  bg-base-100 shadow-sm hover:scale-104 transition: ease-in-out">
          <figure className=" p-2 ">
            <img className="h-60 rounded-2xl  "
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className=" text-center font-bold text-2xl">{title}</h2>
            
            <div className="  flex justify-between ">
                <div className=" flex rounded p-2 bg-[rgba(217,217,217,1)]">
                    <img src={download} alt="" />
                    <p>{downloads}</p>
                    
                </div>
                

                <div className="flex  justify-center items-center rounded p-2 bg-[rgba(217,217,217,1)] ">
                    <img src={star} alt="" />
                    <p>{ratingAvg}</p>
                    
                </div>
                
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSingleApp;
