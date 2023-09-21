import React from 'react';
import '../Shared/Style.css'
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import CountSection from './CountSection';
import SecureCredit from './SecureCredit';
import DifferentProduct from './DifferentProduct';
import Pricing from './Pricing';
import MapSection from './MapSection';
import Footer from '../Shared/Footer';


const Home = () => {
    return (
        <>
            <div className=''>

                <Navbar />

                <Banner />

                <CountSection />

                <SecureCredit />

                <DifferentProduct />


                <Pricing />


                <MapSection />

                <Footer />


            </div>



        </>
    );
};

export default Home;