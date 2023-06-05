import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const SingleService = ({ service }) => {

    const { img, title, description, _id, price } = service;
    return (
        <div>
            <div className="card lg:w-80 my-5 bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img className='rounded' src={img} alt="Shoes" />
                    </PhotoView>
                </PhotoProvider>

                <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <p className='font-bold'>Service Charge : <span className='text-orange-400 font-bold'>{price} BDT</span></p>
                    <p>{description ? <>{description.slice(0, 100) + '...'}</> : { description }}</p>

                    <div className="card-actions justify-center">
                        <Link to={`/service/${_id}`}><button className="btn btn-warning font-bold my-5">See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;