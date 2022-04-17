import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SignIn = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location?.state?.from?.pathname || "/";
    const [email1, setEmail] = useState('')
    const [pass2, setPass] = useState('')

    const [signInWithEmailAndPassword, user, error, loading] = useSignInWithEmailAndPassword(auth);

    const handleEmailLogin = (e) => {
        setEmail(e.target.value)
        console.log(email1)
    }
    const handlePassLogin = (e) => {
        setPass(e.target.value)
        console.log(pass2)
    }
    const handleUserSignIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(email1, pass2)
        if (user) {
            navigate(from, { replace: true });
        }

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
                    </button>
                </Form>
            </div>
        </div>
    );
};

export default SignIn;