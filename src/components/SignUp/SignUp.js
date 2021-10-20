import '../SignIn/SignIn.css'
import { BsGoogle } from 'react-icons/bs'
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    const { error, setError, setIsLoading, signInWithGoogle, signUpWithEmail, updateDisplayName } = useAuth();
    console.log(typeof setUser)
    const location = useLocation();
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const redirectURI = location.state?.from.pathname || '/'

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => { console.log(result.user); history.push(redirectURI) })
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false))
    }

    const handleSignUpWithEmailPass = e => {
        e.preventDefault()

        if (pass.length >= 6) {
            signUpWithEmail(email, pass)
                .then(result => {
                    updateDisplayName(firstName + ' ' + lastName);
                    setError('')
                    history.push(redirectURI)
                })
                .catch(err => setError(err.message))
                .finally(() => setIsLoading(false))
        }
        else {
            setError('Password must be atleast 6 character long')
        }
    }




    return (
        <div>
            <div className='signin'>
                <div className="signin-containner">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSignUpWithEmailPass}>
                        <p>First Name : </p>
                        <input
                            type="text"
                            onChange={e => setFirstName(e.target.value)}
                            required
                            placeholder='Enter your first name'
                        /><br />
                        <p>Last Name : </p>
                        <input
                            type="text"
                            onChange={e => setLastName(e.target.value)}
                            required
                            placeholder='Enter your last name'
                        /><br />
                        <p>Email : </p>
                        <input
                            type="email"
                            onChange={e => setEmail(e.target.value)}
                            required
                            placeholder='Enter your email'
                        /><br />
                        <p>Password : </p>
                        <input
                            type="password"
                            onChange={e => setPass(e.target.value)}
                            required
                            placeholder='Enter password'
                        /><br />
                        <p>{error}</p><br />
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