import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react';
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

    // sign up with email and password
    const signUpWithEmail = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // update Display name
    const updateDisplayName = (fullName) => {
        updateProfile(auth.currentUser,
            {
                displayName: fullName
            })
            .then(() => console.log('Display name added'))
            .catch((error) => setError(error.message))
    }


    // login with email and password
    const signInWithEmail = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
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
        signUpWithEmail,
        updateDisplayName,
        signInWithEmail,
        logOut
    };

}

export default useFirebase;