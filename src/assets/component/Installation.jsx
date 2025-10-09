import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getCartFromLS} from '../../utilities/LocalStorage';
import InstallApp from './Pages/InstallApp';

const Installation = () => {
    const [list,setList] =useState([])
    const allApps = useLoaderData()
    useEffect(()=>{
        const storedId = getCartFromLS();
        const convertedId = storedId.map(id=>parseInt(id))
        const installAppList = allApps.filter(app=>convertedId.includes(app.id))
        setList(installAppList);
    },[])
    
    return (
        <div className='max-w-[1200px] md:mx-auto mx-4'>
            <div className='text-center'>
                <h1 className='font-bold text-black text-3xl md:text-5xl '>Your Installed Apps</h1>
                <p className='my-2.5 text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center'>
                <span className='text-2xl font-semibold text-black'>({list.length})App Found</span>
                <span>Sort</span>
            </div>
            <div>
            {
                list.map(x=><InstallApp key={x.id} x={x}></InstallApp>)
            }
            </div>
        </div>
    );
};

export default Installation;



