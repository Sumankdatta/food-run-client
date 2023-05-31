import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Header = () => {

    const menuItems = <>
        <li><Link>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Add services</Link></li>
        <li><Link>My Reviews</Link></li>
        <li><Link to='login'>Log in</Link></li>
        <li><Link to='signup'>Sign Up</Link></li>

    </>

    return (
        <div>
            <div className="text-center bg-black">
                <h1 className='text-white font-bold'> 🎉 ,hellow</h1>
            </div>
            <div className="navbar bg-accent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link style={{ fontFamily: 'Dancing Script' }} className="btn btn-ghost normal-case text-3xl ms-10"><img className='w-16' src={logo} alt="" /> FoodRun</Link>
                </div>
                <div className="navbar-center lg:me-10 hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1  font-bold">
                        {menuItems}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;