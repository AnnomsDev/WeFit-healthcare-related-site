import '../SignIn/SignIn.css'
import { BsGoogle } from 'react-icons/bs'
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
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
        <div>
            <div className='signin'>
                <div className="signin-containner">
                    <h2>Sign Up</h2>
                    <form >
                        <p>Email : </p>
                        <input type="email" placeholder='Enter your email' />
                        <br />
                        <p>Password : </p>
                        <input type="password" placeholder='Enter password' />
                        <br />
                        <input type="submit" value="Sign Up" className='mt-3 btn btn-danger px-4 text-light' />
                    </form>
                    <button onClick={() => handleGoogleLogin()}><BsGoogle /> Sign Up with Google </button>
                    <Link to='/signin'>Already have an account .</Link>

                </div>
            </div>
        </div>
    );
};

export default SignUp;