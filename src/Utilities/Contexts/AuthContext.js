import { createContext } from "react";

const AuthContext = createContext({
  currentUser: false,
  loading: true,
});

export default AuthContext;
