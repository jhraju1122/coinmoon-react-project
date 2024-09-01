import React from 'react';
import Navbar from './Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Marque from '../Banner/Marque';
import Marquee from 'react-fast-marquee';
import Footer2 from '../Footer/Footer2';

const Home = () => {
    return (
        <div class="container mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Marque></Marque>
            <Marquee></Marquee>
            <Footer></Footer>
            <Footer2></Footer2>
        </div>
    );
};

export default Home;