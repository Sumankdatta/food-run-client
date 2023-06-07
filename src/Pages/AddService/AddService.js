import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../Shared/Hooks/useTitle';

const AddService = () => {
    const navigate = useNavigate()
    const { logOut } = useContext(AuthContext)
    useTitle('Add Service')

    const handleAddProduct = (event) => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value
        const img = form.url.value
        const description = form.description.value
        const price = form.price.value;
        console.log(title, img, description, price)

        const service = {
            title,
            img,
            description,
            price
        }

        fetch('https://food-run-server-sumankdatta.vercel.app/addService', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('foodRun-token')}`
            },
            body: JSON.stringify(service)
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
                    toast.success('Service Added Successfully')
                    form.reset()
                    navigate('/services')
                }
            })

    }
    return (
        <div>
            <h2 className='text-center text-4xl font-semibold text-orange-600 mt-16'>Add Product</h2>
            <form onSubmit={handleAddProduct}>
                <div className="hero">
                    <div className="card  lg:w-2/4 w-full mt-20 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input type="text" name='title' placeholder="Service Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="url" alt='' name='url' placeholder="Photo Url" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Description</span>
                                </label>
                                <input type="text" name='description' placeholder="Description" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Price</span>
                                </label>
                                <input type="text" name='price' placeholder="Description" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Service</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );
};

export default AddService;