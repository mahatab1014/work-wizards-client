import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  console.log(user)

const createUserWithEmail = async (email, password, name, photoURL) => {
  setIsLoading(true);
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      setIsLoading(false);
      return user;
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  } catch (error_1) {
    setIsLoading(false);
    throw error_1;
  }
};

  const loginUserWithEmailAndPassword = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    isLoading,
    createUserWithEmail,
    loginUserWithEmailAndPassword,
    signInWithGoogle,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
