import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react';
import initializeFirebase from '../Firebase/firebase.init'

initializeFirebase();

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const signInWithGoogle = () => {
        console.log('freom useFirebase')
        signInWithPopup(auth, googleProvider)
            .then(result => console.log(result.user)) // no need to set user here, obserber will handle this
            .catch(err => {
                setError(err.message);
                console.log('error from auth: ', error)
            })
    }

    // special observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])


    return {
        user,
        error,
        signInWithGoogle
    };

}

export default useFirebase;