import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../Shared/Hooks/useTitle';

const MyReview = () => {
    const data = useLoaderData()
    const [reviews, setReviews] = useState(data)
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    useTitle('MyReview')

    if (!data) {
        return <p className='text-red-600 font-bold text-xl text-center mt-20'>Loading ....</p>
    }
    if (reviews.length === 0) {
        return <p className='font-bold text-4xl text-center my-10 text-orange-600'>No Review</p>
    }

    const handleDelete = (id) => {
        const agree = window.confirm('Are you want to Delete ?')
        if (agree) {
            fetch(`https://food-run-server-sumankdatta.vercel.app/review/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('foodRun-token')}`
                },

            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        logOut()
                        navigate('/login')
                    }
                    return res.json()
                })
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remainingReview = reviews.filter(review => review._id !== id)
                        setReviews(remainingReview)
                    }
                })
        }

    }
    return (
        <div className='mb-48'>
            <h2 className='font-bold text-4xl text-center my-10 text-orange-600'>Your All Reviews</h2>
            {
                reviews.map(rev =>

                    <div key={rev._id}>

                        <div className='border border-blue-800 mt-5 rounded-lg mx-16 '>
                            <h3 className='ms-5 text-2xl text-orange-600 font-semibold my-5'>{rev.serviceName}</h3>
                            <p className='ms-5 text-xl'>{rev.message}</p>
                            <div className='flex items-center ms-5 mt-5'>
                                <img className='w-12 h-12 rounded-full border-2 border-orange-400' src={rev.userPhoto} alt="" />
                                <h1 style={{ fontFamily: 'Courgette' }} className='ms-5 text-xl'>- {rev.userName} -</h1>
                            </div>
                            <div className='ms-16 my-10'>
                                <Link to={`/update/${rev._id}`}><button className="btn me-2 btn-warning btn-sm font-semibold w-20">Update</button></Link>
                                <button onClick={() => handleDelete(rev._id)} className="btn btn-error btn-sm w-20 font-semibold">Delete</button>
                            </div>
                        </div>


                    </div>
                )
            }

        </div>
    );
};

export default MyReview;