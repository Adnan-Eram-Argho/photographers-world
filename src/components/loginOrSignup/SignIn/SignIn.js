import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import GoogleSignIn from '../../GoogleSignIn/GoogleSignIn';


const SignIn = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location?.state?.from?.pathname || "/";
    const [email1, setEmail1] = useState('')
    const [pass2, setPass2] = useState('')

    const [signInWithEmailAndPassword, user, error, loading] = useSignInWithEmailAndPassword(auth);

    const handleEmailLogin = (e) => {
        setEmail1(e.target.value)
        console.log(email1)
    }
    const handlePassLogin = (e) => {
        setPass2(e.target.value)
        console.log(pass2)
    }
    const handleUserSignIn = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(email1, pass2);

        console.log(user)
        navigate(from, { replace: true })


    }
    return (
        <div className='login'>

            <div className='login-form'>
                <h1>Log in</h1>
                <Form onSubmit={handleUserSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onBlur={handleEmailLogin} required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onBlur={handlePassLogin} required />
                    </Form.Group>

                    <button className='btn' variant="primary" type="submit">
                        Log in
                    </button><br />
                    <Link to='/login'>Dont have an Account?</Link>
                </Form>
                <GoogleSignIn></GoogleSignIn>
            </div>
        </div>
    );
};

export default SignIn;