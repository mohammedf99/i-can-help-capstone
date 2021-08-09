import { useState, useEffect } from "react";
import Firebase from "../../Firebase";
import AuthContext from "../Contexts/AuthContext";

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChange = (user) => {
    if (!user) {
      setCurrentUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setCurrentUser(user);
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(authStateChange);
    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ currentUser, loading }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
