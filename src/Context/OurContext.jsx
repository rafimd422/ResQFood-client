import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const OurContext = ({ children }) => {
  const [loading,setLoading] = useState(true)
  const [user, setUser] = useState(null)



  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth,currentUser => {
    setUser(currentUser);
    console.log(currentUser)
    setLoading(false)
    })
    return () =>{
        return unsubscribe();
    }
     } ,[])

  const AuthValue = { createUser, signIn, loading, user };

  return (
    <AuthContext.Provider value={AuthValue}>{children}
    </AuthContext.Provider>
  );
};

export default OurContext;
