import React from "react";

const HomeSingleApp = ({ product }) => {
  console.log(product);
  const { companyName, image, downloads, reviews, size, title, ratingAvg, id } =
    product;
  return (
    <div className=" w-80">
      <div className="">
        <div className="card  bg-base-100 shadow-sm">
          <figure className="">
            <img className="h-60"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className=" text-center font-bold text-2xl">{title}</h2>
            
            <div className="">
                <p>{ratingAvg}</p>
                <p>{downloads}</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSingleApp;
