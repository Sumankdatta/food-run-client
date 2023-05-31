import React from 'react';
import './Slider.css'
import banner from '../../../assets/deliveryBoy.png'
import { useNavigate } from 'react-router-dom';

const Slider = () => {
    const navigate = useNavigate()
    return (
        <div className='lg:flex flex-cols-reverse bg-teal-50'>
            <div className='w-4/5 text-teal-600 sm:text-center m-auto hover:bg-teal-50 '>
                <h1 className='text-5xl'>Get the Best Service </h1>
                <span className='text-5xl'>with</span>
                <h3 style={{ fontFamily: 'Dancing Script' }} className='text-6xl text-orange-400'>FoodRun</h3>
                <button
                    onClick={() => navigate('/services')}
                    className="btn btn-accent font-bold mt-5">
                    Our Services
                </button>
            </div>
            <div className='w-full mt-20'>
                <img className='lg:w-full ' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Slider;