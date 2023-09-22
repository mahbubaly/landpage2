import React from 'react';
import '../Shared/Style.css'
import googleIcon from '../../assets/Images/google-play.png'
import appleIcon from '../../assets/Images/Apple Icon.png'
import copy from '../../assets/Images/copy.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className='bg-primary'>
                <div className='container mx-auto mt-[100px] '>

                    <div className='lg:flex gap-[90px] pt-[54px]'>
                        <div className='lg:w-[354px]'>
                            <h1 className='text-[#fff] font-bold text-[18px] lg:text-[30px]'>Fine Tech</h1>
                            <p className=' text-[16px] footer_color mt-[30px]'>
                                Lorem ipd dolor sit amet, consect adipis elit. Suspend varius enim in eros element fdffdu tristique. Duis cursus, mi quis viverra ornare.
                            </p>

                            <div className='mt-[50px] flex gap-[30px]'>
                                <Link className='bg-[#fff] flex gap-[10px] items-center
                                 lg:w-[155px] rounded-[10px] justify-center h-[54px]'>
                                    <img src={googleIcon} className='w-[24px] h-[24px]' alt="" />
                                    <div>
                                        <p className='text-secondary text-[12px]'>Get it on </p>
                                        <p className='text-secondary font-semibold text-[14px]'>Google play </p>
                                    </div>

                                </Link>
                                <Link className='bg-[#fff] flex justify-center gap-[10px] items-center
                                 lg:w-[162px] rounded-[10px]  h-[54px]'>
                                    <img src={appleIcon} className='w-[24px] h-[24px]' alt="" />
                                    <div>
                                        <p className='text-secondary text-[12px]'>Available on the </p>
                                        <p className='text-secondary font-semibold text-[14px]'>Apple Store </p>
                                    </div>

                                </Link>

                                <div>

                                </div>
                            </div>

                        </div>
                        <div className=''>


                            <h1 className='text-[#fff] font-semibold text-[18px] lg:w-[117px]'>Our Services</h1>
                            <div className='flex flex-col mt-[25px] gap-5'>
                                <Link className='text-[16px] footer_color '>Help center</Link>
                                <Link className='text-[16px] footer_color '>FAQ</Link>
                                <Link className='text-[16px] footer_color '>Transection</Link>
                                <Link className='text-[16px] footer_color '>Investation</Link>
                            </div>
                        </div>

                        <div>


                            <h1 className='text-[#fff] font-semibold text-[18px] '>Company</h1>
                            <div className='flex flex-col mt-[25px] gap-5'>
                                <Link className='text-[16px] footer_color'>About Us</Link>
                                <Link className='text-[16px] footer_color '>career</Link>
                                <Link className='text-[16px] footer_color '>Management</Link>
                                <Link className='text-[16px] footer_color '>Blog</Link>
                            </div>
                        </div>


                        <div className='lg:w-[500px]'>
                            <h1 className='text-[#fff] font-semibold text-[18px] '>Get the latest information from us</h1>
                            <div className='bg-[#EFEFEF] mt-[34px] flex justify-around items-center rounded-[10px] w-[317px] h-[48px]'>
                                <input type="email" className='bg-[#EFEFEF] pl-[8px]' name="" id="" placeholder='Fell your email' />

                                <button type='submit' className='font-bold text-[16px]  flex gap-[10px] justify-center items-center  border_btn lg:h-[40px] w-full h-[50px] lg:w-[112px]  bg-primary hover:bg-[#1d2e2e] text-white'>Subscribe


                                </button>


                            </div>

                            <h1 className='text-[#fff] font-semibold text-[18px] mt-[44px] '>Follow Us</h1>
                        </div>
                    </div>

                </div>

                <hr className='border-[1px] opacity-[20%] hr_line' />

                <div className='container mx-auto flex justify-between'>
                    <div className='flex gap-[10px] items-center'>
                        <img src={copy} className='w-[10px] h-[10px]' alt="" />
                        <p className=' footer_color text-[14px]'>  Fine Tech All Right reserved</p>
                    </div>
                    <div className='flex gap-[40px]'>
                        <Link>  <p className=' footer_color text-[14px]'>  Terms</p></Link>
                        <Link>  <p className=' footer_color text-[14px]'>  Privacy</p></Link>
                        <Link>  <p className=' footer_color text-[14px]'>  Security</p></Link>
                    </div>
                </div>

            </footer>

        </>
    );
};

export default Footer;