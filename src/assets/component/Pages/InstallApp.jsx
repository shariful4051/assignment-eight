import React from 'react';

import { ToastContainer,toast } from 'react-toastify';
import Rating from '../../../assets/icon-ratings.png'

const InstallApp = ({x,setList}) => {

    const handleRemove =(id)=>{

        
       

        const existingList = JSON.parse(localStorage.getItem('install'))
        let updatedList = existingList.filter(p=>p.id !=id)
        setList(updatedList)
        localStorage.setItem('install',JSON.stringify(updatedList))
         toast('App Uninstalled')
    }
    

    return (
        <div className='md:w-10/12 mx-4 '>

            <div className='flex justify-between items-center shadow-lg p-2.5 my-2'>
           <div>
            <img className='w-[60px] h-[60px] rounded-b-md' src={x.image} alt="" />
            <h1 className='font-medium text-[20px] text-black'>{x.title}</h1>
           
           <div className='flex gap-2'>
             <span><img className='w-[20px]' src={Rating} alt="" /></span>
             <span>{x.ratingAvg}</span>
            
           </div>
           </div>
           <div>
            <button className='cursor-pointer font-semibold text-white bg-[#00D390] rounded-md px-5 py-3' onClick={()=>handleRemove(x.id)}>Uninstall</button>
           </div>
        </div>
         <ToastContainer />
        </div>
    );
};

export default InstallApp;