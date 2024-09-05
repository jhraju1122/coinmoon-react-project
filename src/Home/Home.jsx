import React from 'react';
import Navbar from './Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Marque from '../Banner/Marque';
import Marquee from 'react-fast-marquee';
 import Table1 from '../Banner/Table1';
import Footer2 from '../Footer/Footer2';
import Card1 from '../Card/Card1';

const Home = () => {
    return (
        <div class="container mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Marque></Marque>
            <Marquee></Marquee>
            <Table1></Table1>
            <Card1></Card1>
            <Footer></Footer>
            <Footer2></Footer2>
        </div>
    );
};

export default Home;