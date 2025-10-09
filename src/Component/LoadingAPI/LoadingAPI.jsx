import React from 'react';
import logo from '../../assets/logo.png'

const LoadingAPI = () => {
    return (
        <div className='flex justify-center items-center my-20 '>
           <h1 className='text-4xl font-bold flex'><span className='text-gray-700'>L</span> <img className='h-10 w-10' src={logo} alt="" /> <span className="text-gray-700">ading</span> </h1>
        </div>
    );
};

export default LoadingAPI;