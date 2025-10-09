import React from "react";
import star from '../assets/Star.png'
import download from '../assets/download.png'
import { Navigate, useNavigate } from 'react-router';

const HomeSingleApp = ({ featureProduct, }) => {
  const navigate = useNavigate();
    const handleCardClick = () => {
      navigate(`/app/${id}`); 
    };







//   console.log(featureProduct);
  const { image, downloads,  title, ratingAvg,id } =
    featureProduct;
  return (
    <div onClick={()=> handleCardClick(id)} className=" w-80">
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
