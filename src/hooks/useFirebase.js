import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import initializeFirebase from '../Firebase/firebase.init'

initializeFirebase();

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoaing, setIsLoading] = useState(true)


    const signInWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    const logOut = () => {
        signOut(auth)
            .then(() => setUser({}))
            .finally(() => setIsLoading(false))
    }

    // special observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                // User is signed out
            }
            setIsLoading(false)
        });
    }, [])


    return {
        user,
        error,
        setError,
        isLoaing,
        setIsLoading,
        signInWithGoogle,
        logOut
    };

}

export default useFirebase;