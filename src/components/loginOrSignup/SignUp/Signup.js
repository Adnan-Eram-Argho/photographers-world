import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { Link } from 'react-router-dom';
import './Signup.css'
const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location?.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword,

    ] = useCreateUserWithEmailAndPassword(auth);
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleEmailLogin = (e) => {
        setEmail(e.target.value)
        console.log(email)
    }
    const handlePassLogin = (e) => {
        setPass(e.target.value)
        console.log(pass)
    }
    const handleUserLogIn = (e) => {

        e.preventDefault();

        console.log(e.target)
        createUserWithEmailAndPassword(email, pass).then(() => navigate(from, { replace: true }))

    }
    return (
        <div className='login'>

            <div className='login-form'>
                <h1>Sign up</h1>
                <Form onSubmit={handleUserLogIn}>
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
                        Sign up
                    </button>
                    <Link to='/signin'>Already have an Account?</Link>
                </Form>
            </div>
        </div>
    );
};

export default Login;