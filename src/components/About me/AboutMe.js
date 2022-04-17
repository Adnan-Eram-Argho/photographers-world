import React from 'react';
import './AboutMe.css'
import Argho from '../../images/my image/260428649_629475871411624_3062990065862929738_n.jpg'
import Wobble from 'react-reveal/Wobble';
import { FunnelChart, Funnel, Tooltip, LabelList } from 'recharts';

const AboutMe = () => {
    const data = [
        {
            "value": 100,
            "name": "Html",
            "fill": "#8884d8"
        },
        {
            "value": 90,
            "name": "Js",
            "fill": "#83a6ed"
        },
        {
            "value": 60,
            "name": "Css",
            "fill": "#8dd1e1"
        },
        {
            "value": 80,
            "name": "Bootstrap",
            "fill": "#82ca9d"
        },
        {
            "value": 70,
            "name": "React",
            "fill": "#a4de6c"
        }
    ]
    return (
        <div>
            <div className='d-flex justify-content-center my-img-container'>
                <Wobble>
                    <img src={Argho} width='300px' className='img-fluid my-img' alt="" />
                </Wobble>
            </div>
            <div className='description-cont'>
                <Wobble>
                    <h2>I am a Web developer still at a learning stage but i have a codding experience of almost 2 years.Besides this I am a College Student I read in inter 1st year.I am very hard working .</h2>
                </Wobble>
            </div>
            <div className="row mt-5">
                <div className="col-md-6 col-12 d-flex justify-content-center ">
                    <div className='text-center'>
                        <h3 >My skill set</h3>

                        <FunnelChart width={330} height={250} >
                            <Tooltip />
                            <Funnel
                                dataKey="value"
                                data={data}
                                isAnimationActive
                            >
                                <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
                            </Funnel>
                        </FunnelChart>
                    </div>
                </div>
                <div className="col-md-6 col-12 text-center ">
                    <Wobble>
                        <p >“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain</p>
                    </Wobble>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;