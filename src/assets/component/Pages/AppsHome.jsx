import React from 'react';
import Icon from '../../../assets/icon-downloads.png'
import Rating from '../../../assets/icon-ratings.png'

const AppsHome = ({app}) => {
    console.log(app);
    return (

        <div>
           

        <div className='p-3 bg-gray-300 rounded-md hover:scale-105'>

            
            <div>

                <img  className=' md:h-[200px] h-[100px]  mx-auto w-full overflow-hidden rounded-md' src={app.image} alt="" />
                
            </div>
            <div>
                <h1>{app.title}</h1>
            </div>
            <div className='flex justify-between items-center'>

                <div className='flex items-center'>
                    <img className='h-[12px] w-[12px]' src={Icon} alt="" />
                <div className='text-[#00D390] font-medium'>{app.downloads}</div>
                
            </div>
              <div className='flex items-center'>
                  <img className='h-[12px] w-[12px]' src={Rating} alt="" />
                  <div className='text-[#FF8811]'>
                {app.ratingAvg}
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AppsHome;