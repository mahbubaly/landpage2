import React from 'react';
import { Link } from 'react-router-dom';
import '../Shared/Style.css'
import playBtn from '../../assets/Images/playBtn.png'
import masterCard from '../../assets/Images/master.png'
import notification from '../../assets/Images/notification.png'
import nfc from '../../assets/Images/NFC.png'
import bitCoin from '../../assets/Images/bitCoin.png'
import Binance from '../../assets/Images/Binance.png'
import Ethereum from '../../assets/Images/Ethereum.png'
import orangeLine from '../../assets/Images/orange.png'
import red from '../../assets/Images/redLine.png'
import blue from '../../assets/Images/blue.png'
import rightArrow from '../../assets/Images/RightArrow.png'

const SecureCredit = () => {
    return (
        <>

            <div className='container mx-auto mt-[39px] lg:mt-[180px]'>
                <div className='lg:flex gap-[80px] items-center'>
                    <div className='lg:w-[499px]'>
                        <h1 className='text-[20px] lg:text-[40px] font-semibold text-secondary'>We are always ready to secure your credit card</h1>

                        <p className='text-[20px] mt-[34px]'>
                            Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim Lorem ipsum dolor sit amet consect adipis elit. Suspend varius enim in eros elementum tristique.
                        </p>

                        <Link className='font-bold text-[16px] mt-[70px]  flex gap-[10px] justify-center items-center  border_btn lg:h-[65px] w-full h-[50px] lg:w-[265px]  bg-primary hover:bg-[#1d2e2e] text-white'>Watch video guide
                            <img src={playBtn} className='w-5 h-5' alt="" />

                        </Link>
                    </div>

                    <div className='mt-[40px] lg:mt-0'>

                        <div className=' bg-primary flex justify-center items-center w-full   lg:w-[591px] lg:h-[177px]  rounded-[10px]'>
                            <div className='flex  gap-[9px] lg:gap-[34px] lg:py-0  lg:ps-0 py-[16px] ps-[16px]'>
                                <img src={masterCard} className='w-[58px] h-[58px] lg:w-[70px] lg:h-[70px]' alt="" />
                                <div className='lg:w-[427px] '>
                                    <h1 className='text-[16px] lg:text-[24px] font-semibold text-white'>
                                        Mastercard 3D secure
                                    </h1>
                                    <p className='text-[12px] leading-normal lg:text-[20px] text_color mt-[8px]' >Lorem ipsum dolor sit amet, consect adipr elit. Suspend varius enim a an elementum tristique.</p>
                                </div>
                            </div>
                        </div>



                        <div className=' bg-[#E9F2E9] my-[34px] flex justify-center items-center  lg:w-[591px] lg:h-[177px]  rounded-[10px]'>
                            <div className='flex  gap-[9px] lg:gap-[34px] lg:py-0  lg:ps-0 py-[16px] ps-[16px] '>
                                <img src={notification} className='w-[52px] h-[52px] lg:w-[70px] lg:h-[70px]' alt="" />
                                <div className='lg:w-[427px] '>
                                    <h1 className='text-[16px] lg:text-[24px] font-semibold text-secondary'>
                                        Instant push notification
                                    </h1>
                                    <p className='text-[12px] lg:leading-normal lg:text-[20px] text-secondary mt-[8px]' >Lorem ipsum dolor sit amet, consect adipr elit. Suspend varius enim a an elementum tristique.</p>
                                </div>
                            </div>
                        </div>




                        <div className=' bg-[#E9F2E9] flex justify-center items-center  lg:w-[591px] lg:h-[177px]  rounded-[10px]'>
                            <div className='flex  gap-[9px] lg:gap-[34px] lg:py-0  lg:ps-0 py-[16px] ps-[16px]'>
                                <img src={nfc} className='w-[58px] h-[58px] lg:w-[70px] lg:h-[70px]' alt="" />
                                <div className='lg:w-[427px] '>
                                    <h1 className='text-[16px] lg:text-[24px] font-semibold text-secondary'>
                                        NFC technology
                                    </h1>
                                    <p className='text-[12px] leading-normal lg:text-[20px] text-secondary mt-[8px]' >Lorem ipsum dolor sit amet, consect adipr elit. Suspend varius enim a an elementum tristique.</p>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>



                {/* Grow your wealth with our best services and investment tools */}

                <div className='mt-[180px]'>

                    <div className='lg:flex gap-[60px] items-center'>
                        <div className='BgImgWomen  lg:w-[505px] lg:h-[466px]  lg:pt-[61px]'>

                            <div className='flex gap-[25px] px-[15px] py-[8px] BitCoinBg lg:w-[236px] lg:h-[74px] lg:ml-[229px] justify-center items-center'>
                                <div>
                                    <div className='flex gap-[8px] items-center'>
                                        <img src={bitCoin} className='w-[24px] h-[24px]' alt="" />
                                        <p className='text-[16px] font-semibold '>Bitcoin</p>
                                    </div>
                                    <p className='text-[12px] mt-[10px]'>$30810.90</p>
                                    <p className='text-[#3337FF] text-[12px] '>+2.33</p>

                                </div>

                                <div className='w-[90px] h-[58px]'>
                                    <img src={orangeLine} alt="" />
                                </div>
                            </div>


                            <div className='flex gap-[25px] mt-[6px] px-[15px] py-[8px] BitCoinBg lg:w-[236px] lg:h-[74px] lg:ml-[268px] justify-center items-center'>
                                <div>
                                    <div className='flex gap-[8px] items-center'>
                                        <img src={Binance} className='w-[24px] h-[24px]' alt="" />
                                        <p className='text-[16px] font-semibold '>Binance</p>
                                    </div>
                                    <p className='text-[12px] mt-[10px]'>$810.90B</p>
                                    <p className='text-[#FF334B] text-[12px] '>-1.39</p>

                                </div>

                                <div className='w-[90px] h-[58px]'>
                                    <img src={red} alt="" />
                                </div>
                            </div>



                            <div className='flex  gap-[16px] px-[15px] py-[8px] mt-[90px]  BitCoinBg lg:w-[236px] lg:h-[74px]  justify-center items-center'>
                                <div>
                                    <div className='flex gap-[8px] items-center'>
                                        <img src={Ethereum} className='w-[24px] h-[24px]' alt="" />
                                        <p className='text-[16px] font-semibold '>Ethereum</p>
                                    </div>
                                    <p className='text-[12px] mt-[10px]'>$12810.90</p>
                                    <p className='text-[#3337FF] text-[12px] '>+2.33</p>

                                </div>

                                <div className='w-[90px] h-[58px]'>
                                    <img src={blue} alt="" />
                                </div>
                            </div>


                        </div>


                        <div className='lg:w-[605px] '>
                            <h1 className='text-[20px] font-semibold lg:text-[40px]'>Grow your wealth with our best services and investment tools</h1>

                            <p className='font-normal text-[14px] mt-[20px] text_color2 lg:mt-[34px] lg:text-[20px]'>Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>


                            <Link className='font-bold text-[16px] mt-[70px]  flex gap-[10px] justify-center items-center  border_btn lg:h-[65px] w-full h-[50px] lg:w-[184px]  bg-primary hover:bg-[#1d2e2e] text-white'>Continue 
                                <img src={rightArrow} className='w-5 h-5' alt="" />

                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default SecureCredit;