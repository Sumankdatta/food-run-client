import React, { useContext, useState } from 'react';
import signup from '../../assets/signup.png'
import { Link, useNavigate } from 'react-router-dom';
import useShowPassword from '../../Shared/Hooks/useShowPassword';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import google from '../../assets/google-icon.png'
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../Shared/Hooks/useTitle';


const Signup = () => {
    const { icon, textOrPassword } = useShowPassword();
    const { createUser, ProfileUpdate, googleLogin } = useContext(AuthContext);
    const [accept, setAccept] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useTitle('Sign up')

    const googleProvider = new GoogleAuthProvider()


    const handleSUbmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, url, email, password)
        setError('')


        createUser(email, password)
            .then(result => {
                const user = result.user;
                user.displayName = name;
                user.photoURL = url;
                console.log(user)
                handleUpdateProfile(name, url)
                toast.success('User Create Successfully')
                form.reset()
                navigate('/')

            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleUpdateProfile = (name, url) => {
        const profile = {
            displayName: name,
            photoURL: url

        }
        ProfileUpdate(profile)
    }

    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
        navigate('/')
    }
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
                    <form onSubmit={handleSUbmit} className="card-body">

                        <h1 className="text-3xl text-center py-5 font-bold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="url" name='url' placeholder="Your Photo Url" className="input input-bordered" />
                        </div>
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
                            <div className='pt-4'>
                                <input onClick={handleChecked} type="checkbox" id="condition" name="checkbox" />
                                <label htmlFor="condition"> {<>Accepted <Link className='link link-hover text-primary ' to='/terms'>terms and condition</Link></>}</label>

                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={!accept} className="btn btn-primary">Sign Up</button>
                        </div>
                        <label className="label">
                            <p className='text-sm '>Already have an Account ?<Link to='/login' className="label-text-alt link link-hover text-sm text-primary"> Please Login</Link></p>
                        </label>
                    </form>
                    <div className="form-control w-4/5 mx-auto mb-6">
                        <button onClick={handleGoogleLogin} className="btn  btn-accent"><img className='w-8 me-2' src={google} alt="" /> google</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Signup;