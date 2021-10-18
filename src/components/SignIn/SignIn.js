import './SignIn.css'
import React from 'react';
import { BsGoogle } from 'react-icons/bs'

const SignIn = () => {
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
                <button><BsGoogle/> Sign in with Google </button>
            </div>
        </div>
    );
};

export default SignIn;