import React from 'react';
import './Works.css'
import { useState, useEffect } from 'react'
import Work from '../Work/Work';
const Works = () => {
    const [services, setServices] = useState();
    useEffect(() => {
        fetch('service.json')
            .then(ref => ref.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='row ' id="services">
            {

                services?.map(service => <Work service={service} key={service.id}></Work>)
            }
        </div>
    );
};

export default Works;