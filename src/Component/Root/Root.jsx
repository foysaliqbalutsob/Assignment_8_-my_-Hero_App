import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet, useNavigation } from 'react-router';
import LoadingAPI from '../LoadingAPI/LoadingAPI';

const Root = () => {

    const navigation = useNavigation();
    const [loading, setLoading] =useState(false)


    useEffect(() => {
    if (navigation.state === "loading") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [navigation.state]);



    return (
        <div className='flex flex-col min-h-screen '>
            <Header></Header>
            {
                loading ? (<LoadingAPI></LoadingAPI>):
            
            
            
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
}
            <Footer></Footer>

            
        </div>
            
    );
};

export default Root;