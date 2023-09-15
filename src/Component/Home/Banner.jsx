import React from 'react';
import bannerImg from '../../assets/Images/Hero Picture.png'
import rightArrow from '../../assets/Images/RightArrow.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
        <div className='lg:flex container mx-auto items-center '>
            <div className='lg:w-[604px]'>
                <h1 className='text-[27px] lg:text-[58px] font-bold  text-[#002626] lg:w-[604px]'>Get Convenience of Transaction With New Evolution</h1>
                <p className='lg:w-[502px] mt-[14px] lg:mt-[22px] text-[14px] lg:text-[20px] text-[#002626]'>Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros elementum tristique. Duis cursus.</p>


                <div className='lg:flex mt-[36px] lg:mt-[60px] gap-[18px]'>
                    <Link className='font-bold text-[16px]  flex gap-[10px] justify-center items-center  border_btn lg:h-[65px] w-[280px] h-[50px] lg:w-[204px]  bg-primary hover:bg-[#1d2e2e] text-white'>Get Started
                    <img src={rightArrow} className='w-5 h-5' alt="" />
                    
                    </Link>

                    <Link className='font-bold mt-[10px] lg:mt-0 text-[16px] flex justify-center items-center border_btn w-[280px] h-[50px] lg:h-[64px] lg:w-[174px] hover:bg-primary text-primary hover:text-white'>Learn more</Link>
                </div>
                
            </div>
            <div className='w-[280px] mt-[30px] lg:mt-0 lg:w-[693.999px]'>
                <img src={bannerImg} className=' relative right-4' alt="" />

            </div>
        </div>
            
        </>
    );
};

export default Banner;