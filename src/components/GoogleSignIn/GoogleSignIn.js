import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import google from '../../images/logo/google.png'
import Loading from '../Loading/Loading';
const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    //handle google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle();
        console.log(user)
    }
    //errors
    let errorElement;
    if (error) {
        console.log(error?.message)
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>

    }
    //loading
    if (loading) {
        return <><Loading></Loading></>
    }
    return (
        <div>
            <div className='row'>
                <div className="col-4"><hr /></div>
                <div className="col-4 text-center">or</div>
                <div className="col-4"><hr /></div>
            </div>
            <button class='btn mt-3' onClick={handleGoogleSignIn}> <img src={google} width="30px" alt="" /> Sign IN with Google</button>
            <div> {
                errorElement
            }</div>
        </div>


    );
};

export default GoogleSignIn;