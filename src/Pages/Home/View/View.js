import React, { useState } from 'react';
import './View.css'
import success from '../../../assets/success.jpg'
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers, faTruckFast, faAward } from '@fortawesome/free-solid-svg-icons'


const View = () => {
    const [count, setCount] = useState(false)
    return (
        <div className='tom'
            style={{
                background: (`url(${success})`),
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'cover',
                height: '100vh',
                position: 'relative',
                backgroundAttachment: 'fixed'
            }}>

            <div className='success'>
                <h1 className='lg:text-6xl text-4xl ms-24 text-white absolute lg:mt-24 mt-8 lg:ms-96'>PEOPLE LOVES US</h1>
                <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                    <div className='lg:flex  text-white items-center  justify-evenly mainBox '>
                        <div className='box' >
                            <FontAwesomeIcon className='my-4' icon={faTruckFast} />
                            {count ? < div className='flex'><CountUp start={0} end={1135} delay={0} duration={5} />+</div> : ''}
                            <h2>Delivery</h2>

                        </div>
                        <div className='box'>
                            <FontAwesomeIcon className='my-4' icon={faUsers} />
                            {count ? < div className='flex'><CountUp start={0} end={471} delay={0} duration={5} />+</div> : ''}
                            <h2>Clients</h2>
                        </div>
                        <div className='box'>
                            <FontAwesomeIcon className='my-4' icon={faAward} />
                            {count ? < div className='flex'><CountUp start={0} end={997} delay={0} duration={5} />+</div> : ''}
                            <h2>Reviews</h2>
                        </div>
                    </div>
                </ScrollTrigger>
            </div>
        </div>
    );
};

export default View;