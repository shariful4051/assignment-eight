import React from 'react';
import BannerImg from './../../../assets/hero.png'

const Banner = () => {
    return (
        <div className='text-center'>
            <div>
                <h1>
                    <span className='font-bold md:text-[72px] text-[40px] text-black'>We Build</span> <br />
                  <span className=' font-bold text-[40px] md:text-[72px] text-[#632EE3]'>  Productive</span>  <span className='font-bold text-[40px] md:text-[72px] text-black'>Apps</span>
                </h1>
                <p className='md:text-[20px] text-[#627382] mb-8'>
                 AtHERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more <br /> exciting  Our goal is to turn your ideas into digital experiences that truly make an impact.   
                </p>
                <button className='font-semibold border-1 border-gray-400 px-4 py-3 mr-4 rounded-[4px]'><a href=''>Google Play</a></button>
                <button className='font-semibold border-1 border-gray-400 px-4 py-3 rounded-[4px]'><a>App Store</a></button>
            </div>
           <div className='mt-8'>
             <img className='mx-auto' src={BannerImg} alt="" />
           </div>


            <div className='min-h-[410px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] '>
                <div className=' py-16'><h1 className='font-bold text-[25px] md:text-5xl text-white text-center  '>Trusted by Millions, Built for You</h1></div>

                <div className='max-w-[1440px] mx-auto grid grid-cols-1  md:grid-cols-3 gap-6 pb-16'>
                    <div>
                       <p className='text-white'>Total Downloads</p>
                       <p className='text-6xl font-extrabold text-white'>29.6M</p>
                       <p className='text-white'>21% more than last month</p> 
                    </div>
                    <div>
                       <p className='text-white'>Total Downloads</p>
                       <p className='text-6xl font-extrabold text-white'>29.6M</p>
                       <p className='text-white'>21% more than last month</p> 
                    </div>
                    <div>
                       <p className='text-white'>Total Downloads</p>
                       <p className='text-6xl font-extrabold text-white'>29.6M</p>
                       <p className='text-white'>21% more than last month</p> 
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;