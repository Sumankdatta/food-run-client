import React, { useContext, useState } from 'react';
import useShowPassword from '../../Shared/Hooks/useShowPassword';
import login from '../../assets/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
const Login = () => {
    const { icon, textOrPassword } = useShowPassword()
    const { userLogin } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setError('')
        userLogin(email, password)
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }
                console.log(currentUser)

                // get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {

                        localStorage.setItem('foodRun-token', data.token)
                        toast.success('Login successfully')
                        form.reset()
                        navigate(from, { replace: true })
                    })


            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    return (
        <div className="hero w-full mt-20">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row ">
                <div className="w-full ">
                    <img className='' src={login} alt="" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className=" flex-shrink-0 lg:w-3/4 w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-4xl text-center py-5 font-bold">Log in</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={textOrPassword} name='password' placeholder="password" className="input input-bordered relative" required />
                                <span className='mt-12' style={{ position: 'absolute', marginLeft: '350px' }}>{icon}</span>
                                <span className='text-red-600'>{(error).slice(9)}</span>
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
                </form>
            </div>

        </div>
    );
};

export default Login;