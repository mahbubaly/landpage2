import React from 'react';
import '../Shared/Style.css'
import rightSign from '../../assets/Images/Tick Square.png'
import rightSignWhite from '../../assets/Images/Tick Square white.png'
import { Link } from 'react-router-dom';
const Pricing = () => {
    return (
        <>

            <div className='mx-auto container'>
                <div className=' lg:mt-[150px]'>
                    <div className='lg:w-[729px] mx-auto'>
                        <h2 className='lg:text-center text-secondary font-semibold lg:text-[40px]'>Choose your plan</h2>
                        <p className='text-[20px] lg:text-center mt-[34px] text_color2'>Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                    </div>
                </div>

                <div className='lg:mt-[80px] '>
                    <div className='lg:flex gap-[29px] items-center'>
                        {/* 1 */}
                        <div className='pricingCard   text_color22 text-center lg:w-[370px] lg:h-[580px] p-[39px]'>
                            <p className=' font-semibold text-[20px] '>Basic</p>
                            <h2 className='text-[50px] text-center font-bold mt-[8px]'>$00.00<span className='text-[20px] font-medium'>/month</span></h2>
                            <p className='mt-5 text-[20px] font-medium'>Plan for free account</p>


                            <div className='mt-[70px]'>

                                <div className='flex gap-[10px] items-center '>
                                    <img className='w-[24px] h-[24px]' src={rightSign} alt="" />
                                    <p className='text-[20px]'>Virtual cards</p>
                                </div>
                                <div className='flex gap-[10px] items-center my-5'>
                                    <img className='w-[24px] h-[24px]' src={rightSign} alt="" />
                                    <p className='text-[20px]'>Complete Framework</p>
                                </div>
                                <div className='flex gap-[10px] items-center '>
                                    <img className='w-[24px] h-[24px]' src={rightSign} alt="" />
                                    <p className='text-[20px]'>High rated Support</p>
                                </div>
                                <div className='flex gap-[10px] items-center mt-5'>
                                    <img className='w-[24px] h-[24px]' src={rightSign} alt="" />
                                    <p className='text-[20px]'>Additional elements</p>
                                </div>

                            </div>

                            <div className='mt-[30px]'>
                                <Link className='font-bold text-[16px]  flex gap-[10px] justify-center items-center  border_btn lg:h-[65px] w-full h-[50px] lg:w-[291px]  bg-primary hover:bg-[#1d2e2e] text-white'>Open Bank Account


                                </Link>
                            </div>





                        </div>

                        {/* 2 */}
                        <div className='pricingCard text-[#FFF] bg-[#1D6363] text-center  lg:w-[370px] p-[39px]'>
                            <p className=' font-semibold text-[20px] '>Standard</p>
                            <h2 className='text-[50px] text-center font-bold mt-[8px]'>$99.99<span className='text-[20px] font-medium'>/month</span></h2>
                            <p className='mt-5 text-[20px] font-medium'>Plan for advance account</p>


                            <div className='mt-[70px] text_color'>

                                <div className='flex gap-[10px] items-center '>
                                    <img className='w-[24px] h-[24px]' src={rightSignWhite} alt="" />
                                    <p className='text-[20px]'>Travel Insurance</p>
                                </div>
                                <div className='flex gap-[10px] items-center my-5'>
                                    <img className='w-[24px] h-[24px]' src={rightSignWhite} alt="" />
                                    <p className='text-[20px]'>Cryptocurrency</p>
                                </div>
                                <div className='flex gap-[10px] items-center '>
                                    <img className='w-[24px] h-[24px]' src={rightSignWhite} alt="" />
                                    <p className='text-[20px]'>partners Discount </p>
                                </div>
                                <div className='flex gap-[10px] items-center my-5'>
                                    <img className='w-[24px] h-[24px]' src={rightSignWhite} alt="" />
                                    <p className='text-[20px]'>Spending Statistic </p>
                                </div>
                                <div className='flex gap-[10px] items-center '>
                                    <img className='w-[24px] h-[24px]' src={rightSignWhite} alt="" />
                                    <p className='text-[20px]'>Shared sub-account </p>
                                </div>
                                <div className='flex gap-[10px] items-center mt-5'>
                                    <img className='w-[24px] h-[24px]' src={rightSignWhite} alt="" />
                                    <p className='text-[20px] font-normal '>Free payment Worldwide</p>
                                </div>

                            </div>

                            <div className='mt-[30px]'>
                                <Link className='font-bold text-[16px]  flex gap-[10px] justify-center items-center  border_btn lg:h-[65px] w-full h-[50px] lg:w-[291px]  bg-white hover:bg-[#c0bebe] text-primary'>Open Bank Account


                                </Link>
                            </div>





                        </div>

                        {/* 3 */}
                        <div className='pricingCard  text_color22 text-center lg:w-[370px] lg:h-[580px] p-[39px]'>
                            <p className=' font-semibold text-[20px] '>Premiums </p>
                            <h2 className='text-[50px] text-center font-bold mt-[8px]'>$149.99<span className='text-[20px] font-medium'>/month</span></h2>
                            <p className='mt-5 text-[20px] font-medium'>Plan for full feature account</p>


                            <div className='mt-[70px]'>

                                <div className='flex gap-[10px] items-center '>
                                    <img className='w-[24px] h-[24px]' src={rightSign} alt="" />
                                    <p className='text-[20px]'>Stoks</p>
                                </div>
                                <div className='flex gap-[10px] items-center my-5'>
                                    <img className='w-[24px] h-[24px]' src={rightSign} alt="" />
                                    <p className='text-[20px]'>Cryptocurrency</p>
                                </div>
                                <div className='flex gap-[10px] items-center '>
                                    <img className='w-[24px] h-[24px]' src={rightSign} alt="" />
                                    <p className='text-[20px]'>Travel insurance </p>
                                </div>
                                <div className='flex gap-[10px] items-center mt-5'>
                                    <img className='w-[24px] h-[24px]' src={rightSign} alt="" />
                                    <p className='text-[20px]'>Phone insurance</p>
                                </div>

                            </div>

                            <div className='mt-[30px]'>
                                <Link className='font-bold text-[16px]  flex gap-[10px] justify-center items-center  border_btn lg:h-[65px] w-full h-[50px] lg:w-[291px]  bg-primary hover:bg-[#1d2e2e] text-white'>Open Bank Account


                                </Link>
                            </div>





                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Pricing;