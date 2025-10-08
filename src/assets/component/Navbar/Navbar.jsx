
import { Github } from 'lucide-react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import Logo from './../../../assets/logo.png'


const Navbar = () => {
  const [menu,setMenu] =useState('Home')
  
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
        <NavLink to="/">
        <li className='font-medium text-[#000000]'><a>Home</a></li>
        </NavLink>
       <NavLink to='/apps'>
        <li className='font-medium text-[#000000]'>Apps</li>
        </NavLink>
       <NavLink to='/install'>
        <li className='font-medium text-[#000000]'><a>Installation</a></li>
        </NavLink>

      </ul>
    </div>
   <Link to='/'> <a className="btn btn-ghost text-xl" onClick={()=>setMenu('Home')}> <span><img className='w-[40px] h-[40px]' src={Logo} alt="" /></span> <span className='text-[#9F62F2] text-[16px] font-bold'> HERO.IO</span></a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  items-center px-1">
      <NavLink to="/">
        <li className={`font-medium text-[#000000] ${menu==='Home'&& 'text-[#9F62F2]  border-b'}`} onClick={()=>setMenu('Home')}><a>Home</a></li>
        </NavLink>
       <NavLink to='/apps'>
        <li className={`font-medium text-[#000000] ${menu==='Apps'&& 'text-[#9F62F2]  border-b'}`} onClick={()=>setMenu('Apps')} >Apps</li>
        </NavLink>
       <NavLink to='/install'>
        <li className={`font-medium text-[#000000] ${menu==='Installation'&& 'text-[#9F62F2]  border-b'}`} onClick={()=>setMenu('Installation')}><a>Installation</a></li>
        </NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <a  href='https://github.com/shariful4051' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"> <span className='text-white'> <Github /></span> <span className='font-semibold text-white'>Contribute</span></a>
  </div>
</div>
    );
};

export default Navbar;