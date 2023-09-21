import React from 'react';
import '../Shared/Style.css'
import Withdrawals from '../../assets/Images/withdrewCard.png' 
import CreditCard from '../../assets/Images/creditCard2.png' 
import Investment  from '../../assets/Images/Investment .png' 
import QR  from '../../assets/Images/QR.png' 
import Digital  from '../../assets/Images/Digital Token.png' 
import CardBankStore  from '../../assets/Images/card bank store.png' 

const DifferentProduct = () => {
    return (
        <>
            <div className='mt-[180px]'>
                <div className='lg:w-[729px] mx-auto'>
                    <h2 className='lg:text-center text-secondary font-semibold lg:text-[40px]'>Why our product are different</h2>
                    <p className='text-[20px] lg:text-center mt-[34px] text_color2'>Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                </div>
            </div>





            {/* cards */}

            <div className='container mx-auto mt-[70px]'>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-[36px]'>
                    <div className='flex w-[370px] gap-[34px] h-[169px]'>
                        <div>
                            <img src={Withdrawals} className='w-[58px] h-[58px] lg:w-[70px] lg:h-[70px]' alt="" />
                        </div>
                        <div className='lg:w-[206px]'>
                            <h1 className=' text-[24px] font-semibold text-secondary'>Withdrawals </h1>
                            <p className='mt-[8px] text-[20px] text_color2'>
                                Lorem ipsum dolore sit amet, cone adipis elita kisrfse.
                            </p>

                        </div>
                    </div>
                    <div className='flex w-[370px] gap-[34px] h-[169px]'>
                        <div>
                            <img src={CreditCard} className='w-[58px] h-[58px] lg:w-[70px] lg:h-[70px]' alt="" />
                        </div>
                        <div className='lg:w-[206px]'>
                            <h1 className=' text-[24px] font-semibold text-secondary'>Credit Card </h1>
                            <p className='mt-[8px] text-[20px] text_color2'>
                                Lorem ipsum dolore sit amet, cone adipis elita kisrfse.
                            </p>

                        </div>
                    </div>
                    <div className='flex w-[370px] gap-[34px] h-[169px]'>
                        <div>
                            <img src={Investment} className='w-[58px] h-[58px] lg:w-[70px] lg:h-[70px]' alt="" />
                        </div>
                        <div className='lg:w-[206px]'>
                            <h1 className=' text-[24px] font-semibold text-secondary'>Withdrawals </h1>
                            <p className='mt-[8px] text-[20px] text_color2'>
                                Lorem ipsum dolore sit amet, cone adipis elita kisrfse.
                            </p>

                        </div>
                    </div>
                    <div className='flex w-[370px] gap-[34px] h-[169px]'>
                        <div>
                            <img src={QR} className='w-[58px] h-[58px] lg:w-[70px] lg:h-[70px]' alt="" />
                        </div>
                        <div className='lg:w-[206px]'>
                            <h1 className=' text-[24px] font-semibold text-secondary'>QR pay </h1>
                            <p className='mt-[8px] text-[20px] text_color2'>
                                Lorem ipsum dolore sit amet, cone adipis elita kisrfse.
                            </p>

                        </div>
                    </div>
                    <div className='flex w-[370px] gap-[34px] h-[169px]'>
                        <div>
                            <img src={Digital} className='w-[58px] h-[58px] lg:w-[70px] lg:h-[70px]' alt="" />
                        </div>
                        <div className='lg:w-[206px]'>
                            <h1 className=' text-[24px] font-semibold text-secondary'>Digital Token </h1>
                            <p className='mt-[8px] text-[20px] text_color2'>
                                Lorem ipsum dolore sit amet, cone adipis elita kisrfse.
                            </p>

                        </div>
                    </div>
                    <div className='flex w-[370px] gap-[34px] h-[169px]'>
                        <div>
                            <img src={CardBankStore} className='w-[58px] h-[58px] lg:w-[70px] lg:h-[70px]' alt="" />
                        </div>
                        <div className='lg:w-[206px]'>
                            <h1 className=' text-[24px] font-semibold text-secondary'>Card bank store </h1>
                            <p className='mt-[8px] text-[20px] text_color2'>
                                Lorem ipsum dolore sit amet, cone adipis elita kisrfse.
                            </p>

                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default DifferentProduct;