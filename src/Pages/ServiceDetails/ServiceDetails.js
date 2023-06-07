import { useLoaderData, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import SingleReview from '../SingleReview/SingleReview';
import { toast } from 'react-hot-toast';
import useTitle from '../../Shared/Hooks/useTitle';

const ServiceDetails = () => {
    const { user, logOut } = useContext(AuthContext)
    const data = useLoaderData()
    const { service, review } = data;
    const [serviceReview, setServiceReview] = useState(review)
    const navigate = useNavigate()
    useTitle('Reviews')

    if (!data) {
        return <h1 className='text-3xl text-center text-red-600'>loading .....</h1>
    }

    const handleReviewAdd = (event) => {
        event.preventDefault()
        const message = event.target.message.value;


        const userReview = {
            serviceId: service._id,
            serviceName: service.title,
            userId: user?.uid,
            userName: user?.displayName ?
                user?.displayName : user?.email,
            userPhoto: user?.photoURL ?
                user?.photoURL : 'https://i.postimg.cc/mg2B8vCc/user.png',
            message: message,


        }

        fetch('https://food-run-server-sumankdatta.vercel.app/review', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('foodRun-token')}`
            },
            body: JSON.stringify(userReview)
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
                if (data.acknowledged) {
                    setServiceReview([userReview, ...serviceReview])
                    toast.success('Review add successfully')
                    event.target.reset()
                }

            })
    }
    return (
        <div className='bg-teal-50'>
            <h1 className='text-5xl font-bold pt-10 ms-10 text-orange-600'>{service.title}</h1>
            <div className='lg:flex ms-10 me-10 rounded-xl border-2 mt-10'>
                <img style={{ height: '450px', width: '900px' }} className='h-3/5 rounded-l-lg' src={service.img} alt="" />
                <div className=''>
                    <p className='font-bold mt-10 text-2xl ms-5'>Service Charge <span className='text-orange-400'>{service.price}</span></p>
                    <p className='font-bold mt-10 text-2xl ms-5'>Description</p>
                    <p className='mt-4 ms-5 text-justify me-5'>{service.description}</p>
                </div>
            </div>
            <div>
                <h1 className='text-5xl text-orange-600 font-bold mt-10 ms-32' style={{ fontFamily: 'serif' }}>Reviews</h1>
                <p className='border-b-2 w-3/4 ms-16 mt-5 border-orange-600'></p>
                <p className='text-3xl text-teal-700 mt-5 font-bold ms-16'>Please Add Your Valuable Review</p>

                <div className='mt-10'>
                    <form onSubmit={handleReviewAdd}>
                        <textarea name='message' className="textarea w-4/5 text-xl bg-teal-50 ms-16 textarea-primary" placeholder="Your reviews" required></textarea><br />
                        <button className="btn w-32 ms-16 mt-5 font-bold btn-warning">Submit</button>
                    </form>
                </div>

                <div className='mb-5'>
                    <h1 className='text-3xl text-orange-600 mt-10 font-bold ms-16'>All Reviews About The Service</h1>
                    <p className='border-b-2 w-3/4 ms-16 mt-5 border-orange-600'></p>
                    <div>
                        {
                            serviceReview.map(review => <SingleReview
                                key={review._id}
                                review={review}
                            ></SingleReview>)
                        }
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ServiceDetails;