import React from 'react';
import { Card } from 'react-bootstrap';
import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';
import './Work.css'
const Work = (props) => {
    const { serviceName, description, image, price } = props.service

    return (

        <div className='col-lg-4 d-flex justify-content-center mt-5'>
            <Zoom left>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{serviceName}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            Price: <span style={{ color: 'goldenrod' }}>{price}</span>

                        </Card.Text>
                        <Link className='btn' to='/checkout'>Check Out</Link>
                    </Card.Body>
                </Card>
            </Zoom>
        </div>

    );
};

export default Work;