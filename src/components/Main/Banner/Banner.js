import React from 'react';
import { LightSpeed } from 'react-reveal';
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';
import './banner.css'
const Banner = () => {
    return (
        <div>
            <LightSpeed right>
                <div className='heading '>
                    <div className="row heading-content">
                        <div className="col-lg-8 col-md-8 col-12  heading-text">
                            <Flip top>
                                <h1>Best Personal and professional photography </h1>
                            </Flip>
                        </div>


                        <div className=" col-lg-4 col-md-4 col-12 align-items-center d-flex align-items-center p-0">
                            <Bounce top>
                                <img className=' heading-pic' src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?t=st=1650142792~exp=1650143392~hmac=cfe3f30aff3feb0e268b7918ef066f253a94576151a4aad6d30f397f45b36068" alt="man standing" />
                            </Bounce>
                        </div>

                    </div>
                </div>
            </LightSpeed >
        </div>
    );
};

export default Banner;