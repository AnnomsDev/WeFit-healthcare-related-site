import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth'
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
            // no need to set user here, onAuthStateChanged will handle that
            .then(result => console.log('user Loged in'))
            .catch(err => {
                setError(err.message);
                console.log('error from auth: ', error)
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => setUser({}))
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
        signInWithGoogle,
        logOut
    };

}

export default useFirebase;