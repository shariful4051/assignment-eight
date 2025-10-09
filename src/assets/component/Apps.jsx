
import { useLoaderData } from 'react-router';
import AppsHome2 from './Pages/AppsHome2';
import { useState } from 'react';


const Apps = () => {
    const apps =useLoaderData();
   // console.log(apps);
   const [search,setSearch] = useState('')
   const term = search.trim().toLocaleLowerCase();
   const searchedApps = term?apps.filter(app=>app.title.toLocaleLowerCase().includes(term)):apps
   //console.log(searchedApps);
    
    
        
     
    
    return (
        <div className='max-w-[1200px] md:mx-auto mx-3.5 '>
            <h1 className='text-center md:text-5xl text-3xl font-bold text-black'>Our All Applications</h1>
            <p className='text-[#627382] text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex justify-between items-center my-4'>
                <h1 className=' md:text-3xl font-semibold text-black'>App Found ({searchedApps.length})</h1>
                <label className='input w-[180px] md:w-[300px]'>
                    <input type="text"
                    value={search}
                     onChange={e=>setSearch(e.target.value)}
                     placeholder='Search App' />
                </label>
            </div>
           
        <div className=' max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4'>
            {
                searchedApps.map(app2=><AppsHome2 key={app2.id} app2={app2}></AppsHome2>)
            }
        </div>
        </div>
        
        
    );
};

export default Apps;