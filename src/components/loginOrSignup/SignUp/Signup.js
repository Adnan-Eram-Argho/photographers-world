import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { Link } from 'react-router-dom';
import './Signup.css'
import GoogleSignIn from '../../GoogleSignIn/GoogleSignIn';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Loading/Loading';
const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location?.state?.from?.pathname || "/";
    // email varification
    const [sendEmailVerification, sending1, error1] = useSendEmailVerification(
        auth
    );
    // password reset
    const [sendPasswordResetEmail, sending2, error2] = useSendPasswordResetEmail(
        auth
    )
    // createing email and password
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // getting email and password
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
    //error handling
    let errorElement;

    if (error || error1 || error2) {

        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>

    }
    //loading
    if (loading || sending1 || sending2) {
        return <><Loading></Loading></>
    }
    //handling user login
    const handleUserLogIn = async (e) => {
        e.preventDefault();
        console.log(e.target)
        createUserWithEmailAndPassword(email, pass)
        await sendEmailVerification();
        toast('Verifications email sent please check your email');
    }
    //navigate
    if (user) {
        navigate(from, { replace: true })
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

                    <button className='btn ' variant="primary" type="submit">
                        Sign up
                    </button><br />
                    <button className='btn mt-3'
                        onClick={async () => {
                            await sendPasswordResetEmail(email);
                            toast('Sent email');
                        }}
                    >
                        Reset password
                    </button> <br />

                    <Link to='/signin'>Already have an Account?</Link>

                    <div> {
                        errorElement
                    }</div>
                </Form>
                <ToastContainer />
                {/* google sign in */}
                <GoogleSignIn></GoogleSignIn>
            </div>
        </div>
    );
};

export default Login;