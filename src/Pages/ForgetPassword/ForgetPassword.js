import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const { resetPassword } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleEmail = (event) => {
        const email = event.target.value
        setEmail(email)
    }

    const handleSubmit = () => {
        resetPassword(email)

        setTimeout(() => {
            navigate('/login')
        }, '2000')
        toast.success('Reset Email send check your email')
    }
    return (

        <div className=" flex-shrink-0 mt-20 mx-auto lg:w-2/4 w-full shadow-2xl bg-base-100">
            <div className="card-body">
                <h1 className="text-4xl text-center py-5 font-semibold">Reset Your Password</h1>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input onBlur={handleEmail} type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <span className='text-red-600'></span>
                <div className="form-control mt-6">
                    <button onClick={handleSubmit} className="btn btn-primary">Login</button>
                </div>
            </div>
        </div>

    );
};

export default ForgetPassword;