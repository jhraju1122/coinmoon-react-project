import { Container } from 'postcss';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
          <div id='navbar' className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><button><img className='w-40 h-15' src="https://i.ibb.co/gvxJQS0/horizontal-logo-small.png" alt="" /></button></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a>Coins</a></li>
      <li><a>Airdrops</a></li>
      <li>
        <details>
          <summary>Blogs</summary>
          <ul className="p-2">
            <li><a>News</a></li>
            <li><a>Finance</a></li>
            <li><a>DeFi news</a></li>
            <li><a>Dapps</a></li>
            <li><a>GameFi</a></li>
            <li><a>Exchange news</a></li>
            <li><a>Lunchpad news</a></li>
            <li><a>Altcoins</a></li>
            <li><a>NFT</a></li>
            <li><a>Tutorials</a></li>
          </ul>
        </details>
      </li>
      <li><a>Blogs</a></li>
      <li><a>Games</a></li>
      <li><a>Games</a></li> 
       <li>
        <details>
          <summary>Company</summary>
          <ul className="p-2">
            <li><a>Contact Us</a></li>
            <li><a>Advertice</a></li>
            <li><a>Media Kits</a></li>
            <li><a>Media Kit</a></li>
            <li><a>partners</a></li>
          </ul>
        </details>
      </li>
     </ul>
  </div>
  <div className="navbar-end">
  <div className="form-control">
      <input type="text" placeholder="Search coin, airdrops,con" className="input input-bordered w-24 md:w-auto" />
    </div>
    <a className="btn bg-indigo-600 font-semibold text-white">Get Listed</a>
    <div className='text-indigo-500 font-bold text-[18px]'>
    <Link className='mr-2'>Login</Link>
    <Link>Register</Link>
    </div>
   
  </div>
            </div>
        </div>
    );
};

export default Navbar;