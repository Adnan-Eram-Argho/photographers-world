import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import GoogleSignIn from '../../GoogleSignIn/GoogleSignIn';
import Loading from '../../Loading/Loading';


const SignIn = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location?.state?.from?.pathname || "/";
    //getting email and pass
    const [email1, setEmail1] = useState('')
    const [pass2, setPass2] = useState('')

    const handleEmailLogin = (e) => {
        setEmail1(e.target.value)
        console.log(email1)
    }
    const handlePassLogin = (e) => {
        setPass2(e.target.value)
        console.log(pass2)
    }
    //signing in
    const [signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    // password reset
    const [sendPasswordResetEmail, sending2, error2] = useSendPasswordResetEmail(
        auth
    )
    //loading
    if (loading || sending2) {
        return <><Loading></Loading></>
    }
    //error handeling
    let errorElement;
    if (error || error2) {
        console.log(error?.message)
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }

    const handleUserSignIn = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(email1, pass2);

        console.log(user)



    }
    if (user) {
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
                    <button className='btn mt-3'
                        onClick={async () => {
                            await sendPasswordResetEmail(email1);
                            toast('Sent email');
                        }}
                    >
                        Reset password
                    </button> <br />
                    <Link to='/login'>Dont have an Account?</Link>
                </Form>
                <ToastContainer />
                <div> {
                    errorElement
                }</div>
                {/* google sign in */}
                <GoogleSignIn></GoogleSignIn>
            </div>
        </div>
    );
};

export default SignIn;