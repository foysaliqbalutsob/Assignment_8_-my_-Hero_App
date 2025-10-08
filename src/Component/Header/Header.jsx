import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../../assets/logo.png'
import GitHubLogo from '../../assets/Github_Logo.png'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink 
         className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : ""
              }
         to='/'>Home</NavLink></li>
        <li><NavLink 

         className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : ""
              }
        
        to='/app'>App</NavLink></li>
        <li><NavLink 
         className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : ""
              }
         to='/installation'>Installation</NavLink></li>
       
       
      </ul>
    </div ><img className='h-10 w-10 ml-4' src={Logo} alt="" />
    <NavLink to='/' className="btn btn-ghost text-xl">  Hero.OI</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <li><NavLink 
         className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : ""
              }
         to='/'>Home</NavLink></li>
        <li><NavLink 

         className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : ""
              }
        
        to='/app'>App</NavLink></li>
        <li><NavLink 
         className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : ""
              }
         to='/installation'>Installation</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    
   <Link to='https://github.com/foysaliqbalutsob' className='btn  btn-primary'> <img src={GitHubLogo } alt="" /> Contribute</Link>
  </div>
</div>
        </div>
    );
};

export default Header;