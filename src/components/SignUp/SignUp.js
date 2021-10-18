import '../SignIn/SignIn.css'
import { BsGoogle } from 'react-icons/bs'
import React from 'react';

const SignUp = () => {
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
                    <button><BsGoogle /> Sign Up with Google </button>
                    
                </div>
            </div>
        </div>
    );
};

export default SignUp;