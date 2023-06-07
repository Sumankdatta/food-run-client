import React from 'react';
import Slider from '../Slider/Slider';
import Contact from '../Contact/Contact';
import View from '../View/View';
import HomeServices from '../HomeServices/HomeServices';
import useTitle from '../../../Shared/Hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <HomeServices></HomeServices>
            <Contact></Contact>
            <View></View>

        </div>
    );
};

export default Home;