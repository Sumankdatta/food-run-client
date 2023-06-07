import React, { useEffect, useState } from 'react';
import SingleService from '../../SingleService/SingleService';
import { useNavigate } from 'react-router-dom';

const HomeServices = () => {
    const [services, setServices] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://food-run-server-sumankdatta.vercel.app/threeservices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    if (!services) {
        return <p>Loading....</p>
    }
    return (
        <div className='bg-teal-50 lg:mt-32 mt-48'>
            <h1 className='text-5xl font-bold py-5 text-orange-400 text-center'>Our Services</h1>
            <p className='text-center text-2xl text-teal-600 font-bold'>We Provide Different Type of Services</p>
            <div className='lg:grid grid-cols-3 mt-10 me-10 ms-10'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }

            </div>
            <div className='text-center my-10'>
                <button onClick={() => navigate('/services')} className="btn btn-warning text-xl font-bold">See All Services</button>
            </div>
        </div>
    );
};

export default HomeServices;