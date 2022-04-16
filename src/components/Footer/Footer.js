import React from 'react';
import { Fade } from 'react-reveal';

const Footer = () => {
    let date = new Date().getFullYear();
    return (
        <footer>
            <Fade bottom>
                <p style={{ color: 'gray', textAlign: "center", }}>Copy Right © Adnan Eram Argho {date}</p>
            </Fade>
        </footer>
    );
};

export default Footer;