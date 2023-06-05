import React from 'react';

const SingleReview = ({ review }) => {

    return (
        <div className='border border-blue-800 my-5 py-5 rounded-lg mx-16 '>
            <div>
                <p className='ms-5 text-xl'>{review.message}</p>
                <div className='flex items-center ms-5 mt-5'>
                    <img className='w-12 h-12 rounded-full border-2 border-orange-400' src={review.userPhoto} alt="" />
                    <h1 style={{ fontFamily: 'Courgette' }} className='ms-5 text-xl'>- {review.userName} -</h1>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;