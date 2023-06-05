import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const services = useLoaderData()

    if (!services) {
        return <p className='text-red-600 font-bold text-xl text-center mt-20'>Loading ......</p>
    }
    return (
        <div className='bg-teal-50'>
            <h1 className='text-5xl py-5 font-bold text-orange-600 text-center'>Our Services</h1>
            <p className='text-center text-2xl text-teal-600 mb-10 font-bold'>We Provide Different Type of Services</p>
            <div className='lg:grid grid-cols-3 me-10 ms-10'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }

            </div>

        </div>
    );
};

export default Services;