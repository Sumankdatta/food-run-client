import React from 'react';
import './Slider.css'
import banner from '../../../assets/deliveryBoy.png'
import { useNavigate } from 'react-router-dom';

const Slider = () => {
    const navigate = useNavigate()
    return (

        <div>
            <div className='w-full bg-teal-50'>

                <div className='relative '>
                    <img className='lg:mx-auto lg:w-4/5 w-full relative' src={banner} alt="" />
                </div>
                <div className='absolute lg:top-48 top-32 lg:ms-32 ms-8 text-center slider w-4/5 lg:h-3/4 '>
                    <h1 className='lg:text-6xl mt-16 font-bold text-4xl'>Get the Best Service </h1>
                    <span className='lg:text-5xl font-bold text-4xl'>with</span>
                    <h3 style={{ fontFamily: 'Dancing Script' }} className='lg:text-6xl font-bold text-5xl text-orange-600'>FoodRun</h3>
                    <button
                        onClick={() => navigate('/services')}
                        className="btn btn-warning font-bold mt-5">
                        Our Services
                    </button>
                </div>
            </div>
        </div>

        // <div className='lg:flex flex-cols-reverse bg-pink-50'>
        //     <div className='w-4/5 text-teal-600 sm:text-center m-auto '>
        //         <h1 className='text-5xl'>Get the Best Service </h1>
        //         <span className='text-5xl'>with</span>
        //         <h3 style={{ fontFamily: 'Dancing Script' }} className='text-6xl text-orange-400'>FoodRun</h3>
        //         <button
        //             onClick={() => navigate('/services')}
        //             className="btn btn-accent font-bold mt-5">
        //             Our Services
        //         </button>
        //     </div>
        //     <div className='w-full mt-20'>
        //         <img className='lg:w-full ' src={banner} alt="" />
        //     </div>
        // </div>
    );
};

export default Slider;