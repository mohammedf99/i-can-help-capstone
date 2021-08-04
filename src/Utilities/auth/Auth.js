import React, { useEffect, useState, createContext, useContext } from "react";
import { useRouter } from "next/router";
import Firebase from "../../Firebase";
import { getUser } from "../FirebaseUtilities";

export const AuthContext = createContext({
  currentUser: false,
  loading: true,
  userData: null,
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});

  const authStateChange = (user) => {
    if (user) getUser(user.uid).then(setUserData);
    else setUserData(null);
    setCurrentUser(user);
    setLoading(!loading);
  };

  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(authStateChange);
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

const LoggedIn = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !currentUser) router.push("/");
  }, [currentUser, loading]);

  return <>{currentUser && children}</>;
};

export default LoggedIn;
