import React, { useState } from 'react';
import signup from '../../assets/signup.png'
import { Link } from 'react-router-dom';
import useShowPassword from '../../Shared/Hooks/useShowPassword';

const Signup = () => {
    const { icon, textOrPassword } = useShowPassword();
    const [accept, setAccept] = useState(false)

    const handleChecked = (event) => {
        setAccept(event.target.checked)
    }
    return (
        <div className="hero w-full mt-20">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row ">
                <div className="w-full ">
                    <img className='' src={signup} alt="" />
                </div>
                <div className=" flex-shrink-0 lg:w-3/4 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center py-5 font-bold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="url" placeholder="Your Photo Url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={textOrPassword} placeholder="password" className="input input-bordered relative" />
                            <span className='mt-12' style={{ position: 'absolute', marginLeft: '350px' }}>{icon}</span>

                            <div className='pt-4'>
                                <input onClick={handleChecked} type="checkbox" id="condition" name="checkbox" />
                                <label for="condition"> {<>Accepted <Link className='link link-hover text-primary ' to='/terms'>terms and condition</Link></>}</label>

                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={!accept} className="btn btn-primary">Sign Up</button>
                        </div>
                        <label className="label">
                            <p className='text-sm '>Already have an Account ?<Link to='/login' className="label-text-alt link link-hover text-sm text-primary"> Please Login</Link></p>
                        </label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Signup;