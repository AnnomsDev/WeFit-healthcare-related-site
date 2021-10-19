import './SignIn.css'
import React from 'react';
import { BsGoogle } from 'react-icons/bs'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
    const { setError, setIsLoading, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirectURI = location.state?.from.pathname || '/'

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => history.push(redirectURI))
            .catch(err => setError(err))
            .finally(() => setIsLoading(false))
    }



    return (
        <div className='signin'>
            <div className="signin-containner">
                <h2>Sign In</h2>
                <form >
                    <p>Email : </p>
                    <input type="email" placeholder='Enter your email' />
                    <br />
                    <p>Password : </p>
                    <input type="password" placeholder='Enter password' />
                    <br />
                    <input type="submit" value="Sign In" className='mt-3 btn btn-danger px-4 text-light' />
                </form>
                <button onClick={() => handleGoogleLogin()}><BsGoogle /> Sign in with Google </button>
                <Link to='/signup'>Create new account.</Link>
            </div>
        </div>
    );
};

export default SignIn;