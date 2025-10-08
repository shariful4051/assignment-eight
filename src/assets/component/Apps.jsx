
import { useLoaderData } from 'react-router';
import AppsHome2 from './Pages/AppsHome2';


const Apps = () => {
    const apps =useLoaderData();
    console.log(apps);
    
        
     
    
    return (
        
           
        <div className=' max-w-[1440px] mx-auto grid grid-cols-4 gap-4'>
            {
                apps.map(app2=><AppsHome2 key={app2.id} app2={app2}></AppsHome2>)
            }
        </div>
        
    );
};

export default Apps;