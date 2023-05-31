import React from 'react';
import useShowPassword from '../../Shared/Hooks/useShowPassword';
import login from '../../assets/login.png'
import { Link } from 'react-router-dom';
const Login = () => {
    const { icon, textOrPassword } = useShowPassword()
    return (
        <div className="hero w-full mt-20">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row ">
                <div className="w-full ">
                    <img className='' src={login} alt="" />
                </div>
                <div className=" flex-shrink-0 lg:w-3/4 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-4xl text-center py-5 font-bold">Log in</h1>

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

                            <label className="label">
                                <Link to='/forgetPassword' className="label-text-alt link link-hover text-sm text-primary">Forgot password?</Link>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="label">
                            <p className='text-sm '>New to Website ?<Link to='/signup' className="label-text-alt link link-hover text-sm text-primary"> Please Sign Up</Link></p>
                        </label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;