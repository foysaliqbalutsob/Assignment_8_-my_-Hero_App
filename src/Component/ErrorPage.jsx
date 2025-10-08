import React from 'react';
import { useRouteError } from 'react-router';
import error404 from "../assets/error-404.png"

const ErrorPage = () => {
    
  const error = useRouteError();
  return <div>
    <div>
      <img src= {error404} alt="" />
    </div>
    <div>
      <h1>{error.message}</h1>
    </div>



  </div>;
}

;

export default ErrorPage;
