
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializationAuthentication from "../Componants/Login/Firebase/firebase.init";

initializationAuthentication();

const useFirebase = () => {
     const [user, setUser] = useState({})
     const [isLoading, setLoading] = useState(true)

     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider();

     const signInWithGoogle = () => {
          setLoading(true)
          signInWithPopup(auth, googleProvider)
               .then(result => {
                    setUser(result.user)
               })
               .finally(() => {
                    setLoading(false);
               })

     }

     useEffect(() => {
          const unsubscribed = onAuthStateChanged(auth, user => {
               if (user) {
                    setUser(user)
               }
               else {
                    setUser({})
               }
               setLoading(false);
          })

          return () => unsubscribed;

     }, [])

     const logOut = () => {
          setLoading(true)
          signOut(auth)
               .then(() => {

               })
               .finally(() => setLoading(false))
     }

     return {
          user,
          isLoading,
          signInWithGoogle,
          logOut
     }
}

export default useFirebase;