import React from 'react';
import { Zoom } from 'react-reveal';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <h1>This is blogs</h1>
            <Zoom bottom>
                <div>
                    <h2>Difference between authorization and authentication</h2>
                    <p>authentication is about telling the system who you are by giving them information like you email and password..and authorization is things you can do accourding to who you are.In authentication user and person are verified but in authorization user and person are validated.authorization determines what  permission users have </p>
                </div>
            </Zoom>
            <Zoom bottom>
                <div>
                    <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>Fire base is quite easy to use .it provides many backend services and it supports authentication.thats why most of the people use it.but there are many other options like Parse,Back4App,AWS Amplify.,flutter etc to use as fire base alternative </p>
                </div>
            </Zoom>
            <Zoom bottom>
                <div>
                    <h2>What other services does firebase provide other than authentication</h2>
                    <p>other than authentication firebase provides many dervices such as:
                        1.hosting
                        2.cloud storages
                        3.Cloud Messaging
                        4.Remote Config
                        5.cloud functions
                        6.realtime database
                        etc and many more </p>
                </div>
            </Zoom>
        </div>
    );
};

export default Blogs;