import React from 'react';
import Rating from '../../../assets/icon-ratings.png'
import Icon from '../../../assets/icon-downloads.png'
import { Link } from 'react-router';

const AppsHome2 = ({app2}) => {
    console.log(app2);
    return (
       <Link to={`/cardDetails/${app2.id}`}>
        <div>
                <div className='p-3 bg-gray-300 rounded-md hover:scale-105'>
            
                        
                        <div>
            
                            <img  className=' md:h-[200px] h-[100px]  mx-auto w-full overflow-hidden rounded-md' src={app2.image} alt="" />
                            
                        </div>
                        <div>
                            <h1>{app2.title}</h1>
                        </div>
                        <div className='flex justify-between items-center'>
            
                            <div className='flex items-center'>
                                <img className='h-[12px] w-[12px]' src={Icon} alt="" />
                            <div className='text-[#00D390] font-medium'>{app2.downloads}</div>
                            
                        </div>
                          <div className='flex items-center'>
                              <img className='h-[12px] w-[12px]' src={Rating} alt="" />
                              <div className='text-[#FF8811]'>
                            {app2.ratingAvg}
                            </div>
                            </div>
                        </div>
                    </div>
        </div>
        </Link>
    );
};

export default AppsHome2;