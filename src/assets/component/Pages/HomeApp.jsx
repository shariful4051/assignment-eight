import React from 'react';
import AppsHome from './AppsHome';

const HomeApp = ({apps}) => {
    console.log(apps)
    return (
        <div>
             <h1 className='font-bold md:text-5xl text-3xl text-black text-center mt-16'> Trending Apps</h1>
            <p className='text-[#627382] text-center py-4'>Explore All Trending Apps on the Market developed by us</p>
        <div className=' max-w-[1440px] mx-auto grid grid-cols-4 gap-4'>
                {
                    apps.map(app=><AppsHome key={app.id} app={app}></AppsHome>)
                }
        </div>
        </div>
    );
};

export default HomeApp;