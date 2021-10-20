import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword,  updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.inti';



initializeAuthentication();
const useFirebase = () =>{
    
    const [error ,setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const [user ,setUser] = useState({});
    const auth = getAuth();

    // google sign in 
    const signInWithGoogle = () =>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        
    }
    
    // create new user
    const registration = (email , password ,name) =>{
        createUserWithEmailAndPassword(auth ,email,password)
        .then(result =>{
            setUserName(name);
            
        })
        
    }

    // set name
    const setUserName = (name) =>{
        updateProfile(auth.currentUser , {displayName : name})
        .then(res => {
            window.location.reload()
        })
    }

    
    
    // login
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
    },[]);
    // logout
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
        registration,
        logIn,
        

    }
}

export default useFirebase;