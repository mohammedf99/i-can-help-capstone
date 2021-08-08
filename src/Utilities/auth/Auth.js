import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import AuthContext from "../Contexts/AuthContext";

const LoggedIn = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !currentUser) {
      router.push("/");
    }
  }, [currentUser, loading]);

  return <>{!loading && currentUser && children}</>;
};

export default LoggedIn;
