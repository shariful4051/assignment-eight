import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import InstallApp from './Pages/InstallApp';

const Installation = () => {

   

    const [list,setList] =useState([])
    const allApps = useLoaderData()


    useEffect(()=>{
        const saveList = JSON.parse(localStorage.getItem('install'))
        if(saveList) setList(saveList)
    },[])
   
    

     const[sortOrder,setSortOrder] = useState('none')
     
     const sortedItem =(()=>{
        if(sortOrder=='download1'){
            return[...list].sort((a,b)=>a.ratingAvg-b.ratingAvg)
        }else if(sortOrder=='download2'){
            return [...list].sort((a,b)=>b.ratingAvg-a.ratingAvg)
        }else{
            return list
        }
     })();
    
    
    return (
        <div className='max-w-[1200px] md:mx-auto mx-4'>
            <div className='text-center'>
                <h1 className='font-bold text-black text-3xl md:text-5xl '>Your Installed Apps</h1>
                <p className='my-2.5 text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center'>
                <span className='text-2xl font-semibold text-black'>({sortedItem.length})App Found</span>

                <select className='select select-border' value={sortOrder} onChange={e=>setSortOrder(e.target.value)}>
                    <option value="none">Sort By Ratings</option>
                    <option value="download1">Low to high</option>
                    <option value="download2">High to Low</option>
                </select>
            </div>
            <div>
            {
                sortedItem.map(x=><InstallApp key={x.id} x={x} list={list} setList={setList}></InstallApp>)
            }
            </div>
        </div>
    );
};

export default Installation;



