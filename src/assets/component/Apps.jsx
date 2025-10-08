import React from 'react';
import { useLoaderData } from 'react-router';
import AppsHome from './Pages/AppsHome';

const Apps = () => {
    const apps =useLoaderData()
    return (
        <div className=' max-w-[1440px] mx-auto grid grid-cols-4 gap-4'>
            {
                apps.map(app=><AppsHome key={apps.id} app={app}></AppsHome>)
            }
        </div>
    );
};

export default Apps;