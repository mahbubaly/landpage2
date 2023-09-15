import React from 'react';
import credit from '../../assets/Images/Credit.png'
import savings from '../../assets/Images/savings.png'
import homeLone from '../../assets/Images/HomeLoans.png'
import { Link } from 'react-router-dom';
import rightArrow from '../../assets/Images/RightArrow.png'

const CountSection = () => {
    return (
        <>
            <div className='mt-[50px] lg:mt-[100px] container mx-auto'>
                <div className='bg-primary h-[100px] lg:h-[296px] flex px-[30px] lg:px-[100px] lg:gap-[174px] items-center rounded-[30px] bg_lines'>


                    <div >
                        <h1 className=' lg:text-[50px] lg:text-center font-semibold text-white'>3M+</h1>
                        <p className='text-[10px] lg:text-[20px] font-normal text_color '>Setisfide User Globally</p>
                    </div>
                    <div >
                        <h1 className=' lg:text-[50px] lg:text-center font-semibold text-white'>10%</h1>
                        <p className='text-[10px] lg:text-[20px] font-normal text_color '>Beneficial cashback</p>
                    </div>
                    <div >
                        <h1 className=' lg:text-[50px] lg:text-center font-semibold text-white'>150+</h1>
                        <p className='text-[10px] lg:text-[20px] font-normal text_color '>Countries support</p>
                    </div>


                </div>



                <div className='lg:flex mt-[50px] lg:mt-[100px] gap-[122px]  items-center'>
                    <div className='Bg_frame2 rounded-[30px] lg:h-[515px] lg:w-[597px] lg:pt-[40px] lg:ps-[30px] '>

                        <div className='lg:w-[462px] lg:h-[125px]  flex gap-[34px] shadow_saving_home_credit items-center px-[30px] rounded-[10px] bg-[#FFF]'>
                            <img src={credit} className='w-[70px] h-[70px]' alt="" />
                            <div>
                                <h3 className='text-[24px] font-semibold text-secondary'>Savings </h3>
                                <p className='text-[20px] text_color2 mt-[8px]'>Lorem ipsum dolor sit amet, consect adipis elit.</p>
                            </div>
                        </div>

                        <div className='lg:w-[461px] lg:ml-[201px] mt-[30px] flex shadow_saving_home_credit gap-[34px] items-center h-[125px] px-[30px] rounded-[10px] bg-[#FFF]'>
                            <img src={savings} className='w-[70px] h-[70px]' alt="" />
                            <div>
                                <h3 className='text-[24px] font-semibold text-secondary'>Credit Card</h3>
                                <p className='text-[20px] text_color2 mt-[8px]'>Lorem ipsum dolor sit amet, consect adipis elit.</p>
                            </div>
                        </div>

                        <div className='lg:w-[462px] -ml-[95px] shadow_saving_home_credit mt-[30px] flex gap-[34px] items-center h-[125px] px-[30px] rounded-[10px] bg-[#FFF]'>
                            <img src={homeLone} className='w-[70px] h-[70px]' alt="" />
                            <div>
                                <h3 className='text-[24px] font-semibold text-secondary'>Home Loans</h3>
                                <p className='text-[20px] text_color2 mt-[8px]'>Lorem ipsum dolor sit amet, consect adipis elit.</p>
                            </div>
                        </div>

                    </div>


                    <div className=' lg:w-[451px]'>

                        <h1 className='text-secondary lg:text-[40px] font-semibold'>
                            Empowering your financial journey
                        </h1>
                        <p className='lg:text-[20px] text_color2 mt-[34px]'>Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>


                        <Link className='font-bold text-[16px] mt-[70px]  flex gap-[10px] justify-center items-center  border_btn lg:h-[66px] w-[280px] h-[50px] lg:w-[203px]  bg-primary hover:bg-[#1d2e2e] text-white'>Learn More
                            <img src={rightArrow} className='w-5 h-5' alt="" />

                        </Link>

                    </div>

                </div>



            </div>



        </>
    );
};

export default CountSection;