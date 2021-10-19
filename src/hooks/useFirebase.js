import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged , createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.inti';


initializeAuthentication();
const useFirebase = () =>{
    const {error ,setError} = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [user ,setUser] = useState({});
    const auth = getAuth();

    const signInWithGoogle = () =>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        
    }
    const signInWithEmailPassword = (email , password) =>{
        createUserWithEmailAndPassword(auth ,email,password)
        .then(result =>{
        })
        
    }
    
    const logIn = (email , password) =>{
        signInWithEmailAndPassword(auth , email, password)
        .then(result => {
            setError('')
        })
        .catch(error =>{
            setError(error.massage)
        })
    }

   
    useEffect(()=>{
        onAuthStateChanged(auth , user =>{
            if(user){
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false)
        });
    },[])
    const logOut =() =>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{
            setUser({})
        })
            .finally(() => setIsLoading(false))
    }
    return{
        user,
        isLoading,
        signInWithGoogle,
        logOut,
        signInWithEmailPassword,
        logIn,
        

    }
}

export default useFirebase;