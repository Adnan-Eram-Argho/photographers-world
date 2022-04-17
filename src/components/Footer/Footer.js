import React from 'react';
import { Fade } from 'react-reveal';

const Footer = () => {
    let date = new Date().getFullYear();
    return (
        <footer className='mt-5'>
            <Fade bottom>
                <p style={{ color: 'gray', textAlign: "center", }}>Copy Right © Adnan Eram Argho {date}</p>
            </Fade>
        </footer>
    );
};

export default Footer;