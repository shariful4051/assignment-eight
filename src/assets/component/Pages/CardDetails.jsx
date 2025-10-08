import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Download from '../../../assets/icon-downloads.png'
import Review from '../../../assets/icon-review.png'
import Rating from '../../../assets/icon-ratings.png'
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { addCartLS } from '../../../utilities/LocalStorage';


const CardDetails = () => {
    const{id} = useParams()
    const appId =parseInt(id)
   // console.log(id);

    const apps =useLoaderData()
    const singleApp = apps.find(app=>app.id ==appId)
    const rating = singleApp.ratings;
    console.log(rating);
    const [install,setInstall] = useState(false)

    const handleInstall =(id)=>{

        setInstall(!install)

        addCartLS(id);


    }
    return (
        <div>


        <div className='flex gap-10 md:flex-row flex-col'>
            <div>
                <img className='h-[350px] w-[350px]' src={singleApp.image} alt="" />
            </div>

           <div className='flex flex-col  justify-between'>

             <div>
                <h1 className='font-bold text-3xl text-black'>{singleApp.title}</h1>
                <p><span className='text-[#627382]'>Developed By </span> <span className='text-[#632EE3]'>{singleApp.companyName}</span></p>
            </div>


            <div className='flex  gap-6'>
                <div className='flex flex-col'>
                    <span><img src={Download} alt="" /></span>
                    <span>Downloads</span>
                    <span className='font-extrabold text-4xl'>8M</span>
                </div>
                <div className='flex flex-col'>
                    <span><img src={Rating} alt="" /></span>
                    <span>Average Ratings</span>
                    <span className='font-extrabold text-4xl'>4.9</span>
                </div>
                <div className='flex flex-col'>
                    <span><img src={Review} alt="" /></span>
                    <span>Total Reviews</span>
                    <span className='font-extrabold text-4xl'>54K</span>
                </div>
                
            </div>

                  <div>
                    <button onClick={()=>handleInstall(singleApp.id)} className={`${install&&'disabled'} bg-[#00D390] text-white font-semibold px-5 py-3.5 rounded-md`}>{install?'Installed':'Install Now'}</button>
                </div>

           </div>
             
            
        </div>

        {/* rechart */}
        <div className='my-10'>
            <h1 className='font-semibold text-2xl my-3'>Ratings</h1>
            <div>
             <BarChart width={400} height={400} data={rating}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis ></YAxis>
                <Bar dataKey={'count'} fill='green'></Bar>
                

             </BarChart>
  
            </div>
            
        </div>

        <div>
            <h1 className='font-semibold text-2xl text-black'>Description</h1>
            <p>{singleApp.description}</p>
        </div>


        </div>
    );
};

export default CardDetails;



