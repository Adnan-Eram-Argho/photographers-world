import React from 'react';
import Photos from '../Photos/Photos';
import Works from '../Works/Works';
import Banner from './Banner/Banner';

import './Main.css'

const Main = () => {

    return (
        <div >
            <Banner ></Banner>
            <div className='container'>
                <Works></Works>
                <Photos></Photos>
            </div>

        </div >
    );
};

export default Main;