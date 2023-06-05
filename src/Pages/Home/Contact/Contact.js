import React from 'react';
import call from '../../../assets/telephone_gif.gif'

const Contact = () => {
    return (





        <div className=' bg-teal-100 p-8'>
            <div className='text-center bg-teal-300 rounded-xl p-8'>
                <h1 className='text-2xl font-bold'>Call us to make order now</h1>
                <img className='h-1/5 w-1/5 mx-auto ' src={call} alt="" />
                <h1 className='lg:text-5xl text-4xl font-bold'>+88 01711-123456</h1>

            </div>
        </div>


    );
};

export default Contact;