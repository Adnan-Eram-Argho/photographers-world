import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Photos.css'
const Photos = () => {
    return (
        <div>
            <div className='text-center mt-5'>
                <h1>Some photos clicked by me</h1>
                <p>Here are some photos clicked by me</p>
            </div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://img.freepik.com/free-photo/cute-smiling-girl-guessing-whats-inside-pink-present-box-shaking-gift-laughing-standing-against-studio-background_1258-88267.jpg?t=st=1650290504~exp=1650291104~hmac=cdb9d8ceaad4fca87e2a132140ebdc79099cb5990b119342424fbf20cabbc5c1"
                            alt="First slide"
                        />
                        <Carousel.Caption>

                            <p style={{ color: 'black' }}>This picture was taken on her birthday</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://img.freepik.com/free-photo/beautiful-girl-sitting-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1093.jpg?t=st=1650290595~exp=1650291195~hmac=aa4b72bf1aedb804b532771ee67026fc6b651e19bec8a0a81d10207cb4b8b7d8"
                            alt="Second slide"
                        />

                        <Carousel.Caption>

                            <p>This picture was taken as a personal photography</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://img.freepik.com/free-photo/sunrise-northern-chiang-rai-thailand_130181-71.jpg?w=900"
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                            <p>This picture is one of my favorite clicks</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Photos;