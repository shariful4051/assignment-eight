
import { useLoaderData } from 'react-router';
import AppsHome2 from './Pages/AppsHome2';


const Apps = () => {
    const apps =useLoaderData();
    console.log(apps);
    
    
        
     
    
    return (
        <div className='max-w-[1200px] Md:mx-auto mx-3.5 '>
            <h1 className='text-center md:text-5xl text-3xl font-bold text-black'>Our All Applications</h1>
            <p className='text-[#627382] text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex justify-between items-center my-4'>
                <h1 className=' md:text-3xl font-semibold text-black'>App Found ({apps.length})</h1>
                <label className='input w-[180px] md:w-[300px]'>
                    <input type="search" placeholder='Search App' />
                </label>
            </div>
           
        <div className=' max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4'>
            {
                apps.map(app2=><AppsHome2 key={app2.id} app2={app2}></AppsHome2>)
            }
        </div>
        </div>
        
        
    );
};

export default Apps;