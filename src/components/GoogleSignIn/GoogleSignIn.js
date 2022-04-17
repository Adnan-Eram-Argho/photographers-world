import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import google from '../../images/logo/google.png'
const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleGoogleSignIn = () => {
        signInWithGoogle();
        console.log(user)
    }
    return (
        <div>
            <div className='row'>
                <div className="col-4"><hr /></div>
                <div className="col-4 text-center">or</div>
                <div className="col-4"><hr /></div>
            </div>
            <button class='btn mt-3' onClick={handleGoogleSignIn}> <img src={google} width="30px" alt="" /> Sign IN with Google</button>
        </div>
    );
};

export default GoogleSignIn;