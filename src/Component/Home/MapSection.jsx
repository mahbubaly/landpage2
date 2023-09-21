import React from 'react';
import '../Shared/Style.css'
import rightArrow from '../../assets/Images/RightArrow.png'
import worldMap from '../../assets/Images/world map 2.png'
import { Link } from 'react-router-dom';

const MapSection = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className='lg:mt-[150px]'>
                    <div className='lg:w-[1086px] mx-auto'>
                        <h2 className='lg:text-center text-[#002626] font-semibold lg:text-[40px]'>We provide the world's best services for international money transfers, without any hassle</h2>
                        <p className='text-[20px] lg:text-center mt-[34px] text_color2'>Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare..</p>
                    </div>


                    <Link className='mt-[50px] font-bold text-[16px]  flex gap-[10px] justify-center items-center  border_btn lg:h-[65px] w-full h-[50px] lg:w-[393px] mx-auto  bg-primary hover:bg-[#1d2e2e] text-white'>Learn about international services
                        <img src={rightArrow} className='w-5 h-5' alt="" />

                    </Link>
                </div>



                <div className='lg:mt-[80px] '>
                    <img src={worldMap} className='' alt="" />
                </div>



                <div className='JoinBackGround rounded-[30px] lg:py-[80px] lg:mt-[110px]'>
                    <div className='lg:w-[738px] mx-auto '>
                        <h2 className='lg:text-center lg:w-[504px] mx-auto text-[#002626] font-semibold lg:text-[40px]'>Join million people who already trust us</h2>
                        <p className='text-[20px] lg:text-center mt-[34px] text_color2'>Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in ipsum dolor sit amet, consect adipis elit.</p>

                        <Link className='lg:mt-[50px] mx-auto font-bold text-[16px]  flex gap-[10px] justify-center items-center  border_btn lg:h-[65px] w-full h-[50px] lg:w-[188px]  bg-primary hover:bg-[#1d2e2e] text-white'>Register now
                            

                        </Link>
                    </div>

                </div>






            </div>

        </>
    );
};

export default MapSection;