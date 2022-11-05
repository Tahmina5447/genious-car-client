import React from 'react';
import About from './About';
import Services from './Services';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;