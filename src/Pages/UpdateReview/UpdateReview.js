import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const UpdateReview = () => {
    const data = useLoaderData()
    const navigate = useNavigate()
    const { logOut } = useContext(AuthContext)

    const handleUpdateReview = (event) => {
        event.preventDefault()
        const message = event.target.message.value;
        console.log(message)

        const mes = {
            message
        }

        fetch(`http://localhost:5000/update/${data._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('foodRun-token')}`
            },
            body: JSON.stringify(mes),
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
                if (data.modifiedCount > 0) {
                    toast.success('Update successfully')
                    navigate('/services')
                }
            })
    }
    return (
        <div>
            <div className='mt-10'>
                <h2 className='font-bold text-4xl text-center my-10 text-orange-600'>Update Your Review :</h2>
                <h2 className='font-bold text-2xl ms-16  my-10 text-teal-600'>{data.serviceName}</h2>
                <form onSubmit={handleUpdateReview}>
                    <textarea defaultValue={data.message} name='message' className="textarea w-4/5 text-xl bg-teal-50 ms-16 textarea-primary" placeholder="Your reviews" required ></textarea><br />
                    <button className="btn w-32 mx-16 mt-5 font-bold btn-warning">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;