import React from 'react';
import { Link } from 'react-router';
import appError from '../../src/assets/App-Error.png'

const NoAppFound = ({search}) => {
    console.log(search)
    return (
        <div className='flex flex-col justify-center items-center border '>
           <div className=''>
             <img src={appError} alt="" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">OPPS!! APP NOT FOUND: {search}</h2>
            <p className="text-[rgba(98,115,130,1)]  mb-8  text-lg">The App you are requesting is not found on our system. please try another apps</p>

            <Link className='btn btn-primary' to='/'> Go Back </Link>
           </div>
        </div>
    );
};

export default NoAppFound;