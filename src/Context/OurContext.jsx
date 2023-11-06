import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import Swal from "sweetalert2";

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
  const logOut = () => {
    setLoading(true)
    Swal.fire({
      title: "Are you sure?",
      text: "Do You want to log out from this account?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth)
        Swal.fire({
          title: "Done",
          text: "You've logged out successfully'",
          icon: "success"
        });
      }
    });
  }
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

  const AuthValue = { createUser, signIn, loading, user, logOut };

  return (
    <AuthContext.Provider value={AuthValue}>{children}
    </AuthContext.Provider>
  );
};

export default OurContext;
