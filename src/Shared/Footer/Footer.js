import React from 'react';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer footer-center mt-20 p-10 bg-teal-500 text-black text-primary-content">
            <div>
                <img className='w-20' src={logo} alt="" />
                <p className="font-bold">
                    FoodRun. <br />Providing reliable tech since 1992
                </p>
                <p>Copyright © 2023 - All right reserved</p>
            </div>

        </footer>
    );
};

export default Footer;