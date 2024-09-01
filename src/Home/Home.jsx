import React from 'react';
import Navbar from './Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Marque from '../Banner/Marque';
import Marquee from 'react-fast-marquee';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Marque></Marque>
            <Marquee></Marquee>
            <Footer></Footer>
        </div>
    );
};

export default Home;