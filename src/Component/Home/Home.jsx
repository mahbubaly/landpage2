import React from 'react';
import '../Shared/Style.css'
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import CountSection from './CountSection';


const Home = () => {
    return (
        <>
            <div className=''>

                <Navbar />

                <Banner />
                
                <CountSection />


            </div>



        </>
    );
};

export default Home;