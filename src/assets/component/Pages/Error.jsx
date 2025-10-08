import React from 'react';
import ErrorImg from '../../../assets/App-Error.png'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col items-center gap-6'>
            <img src={ErrorImg} alt="" />
            <p className='font-semibold text-5xl text-black'>Oops, page not found!</p>
           <Link to='/'> <button className='bg-[#632EE3] text-white font-semibold px-5 py-3 mt-3 rounded-md'>Go Back</button></Link>
        </div>
    );
};

export default Error;