import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, } from 'react-icons/fa';
import '../Shared/Style.css'

const Navbar = () => {

    const navbar = <>

        <Link className=''     >


            <li className='text-[16px] font-medium text-[#002626] py-[14px] px-[14px]'>Account</li>


        </Link>

        <Link className=''  >


            <li className='text-[16px] font-medium text-[#002626] py-[14px] px-[14px]'>Personal</li>



        </Link>


        <Link className=''     >


            <li className='text-[16px] font-medium text-[#002626] py-[14px] px-[14px]'>Business</li>


        </Link>

        <Link className=''     >


            <li className='text-[16px] font-medium text-[#002626] py-[14px] px-[14px]'>Company</li>


        </Link>

        <div className='lg:hidden  flex flex-col gap-[14px]'>

            <div className=''>
                <Link className='font-bold text-[16px]  flex justify-center items-center text-primary border_btn h-[50px] w-[111px]  hover:bg-primary hover:text-white'>Log In</Link>
            </div>
            <div className=''>
                <Link className='font-bold text-[16px] flex justify-center items-center text-primary border_btn h-[50px] w-[124px] hover:bg-primary hover:text-white'>Sign Up</Link>
            </div>
        </div>






















    </>


    const [open, setOpen] = useState(false);
    return (
        <>

            <div className='container mx-auto' >
                <div className='flex justify-between'>
                    <div className='flex  mobile_gap   items-center'>
                        <div>
                            <h1 className='text-[#1D6363] font-bold text-[18px] lg:text-[30px] h-[22px] lg:h-[41px]'>Fine Tech</h1>
                        </div>


                        <div className="flex items-center gap-4">



                            <div className="hidden lg:block">
                                <nav aria-label="">
                                    <ul className="flex items-center gap-[36px] text-sm">
                                        {navbar}
                                    </ul>
                                </nav>
                            </div>









                            {/* Mobile */}

                            <div className={`block lg:hidden bg-white  lg:col-span-3  absolute lg:static lg:w-auto top-0 left-0 overflow-hidden h-full lg:h-auto duration-500    lg:bg-[transparent] lg:p-0 z-50 ${open ? "w-full  p-5" : "w-0"}`}>

                                <div className='flex  justify-between'>
                                    <ul className='flex  flex-col  '>

                                        {navbar}



                                    </ul>

                                    <FaTimes onClick={() => setOpen(!open)} className='w-[24px] h-[24px] text-primary' />
                                </div>
                            </div>

                            <button onClick={() => setOpen(!open)} className='block lg:hidden'>{open ? <> </> : <FaBars className='w-[24px] h-[24px] text-primary' />}</button>
                        </div>
                    </div>

                    <div className='lg:flex gap-[18px] hidden'>
                        <div>
                            <Link className='font-bold text-[16px]  flex justify-center items-center text-primary border_btn h-[50px] w-[111px]  hover:bg-primary hover:text-white'>Log In</Link>
                        </div>
                        <div>
                            <Link className='font-bold text-[16px] flex justify-center items-center border_btn h-[50px] w-[124px] bg-primary hover:bg-[#1d2e2e] text-white'>Sign Up</Link>
                        </div>
                    </div>
                </div>


            </div>


        </>
    );
};

export default Navbar;