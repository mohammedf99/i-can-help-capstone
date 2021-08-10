import React, { useState } from "react";
import Navbar from "../Navbar/NavbarSection";
import Footer from "../Footer/Footer";
import SignUpForm from "../SignUp/SignUp";
import SignInForm from "../SignIn/SignIn";

const Layout = ({ children }) => {
  const [signUpVisible, setSignUpVisisble] = useState(false);
  const [signInVisible, setSignInVisisble] = useState(false);

  const changeSignupVisible = () => setSignUpVisisble((prev) => !prev);

  const changeSigninVisible = () => setSignInVisisble((prev) => !prev);

  const changeForm = () => {
    changeSigninVisible();
    changeSignupVisible();
  };

  const auth = { changeSigninVisible, changeSignupVisible, changeForm };

  return (
    <div>
      <SignUpForm
        isVisible={signUpVisible}
        backgroundClick={() => changeSignupVisible()}
        changeForm={() => changeForm()}
      />
      <SignInForm
        isVisible={signInVisible}
        backgroundClick={() => changeSigninVisible()}
        changeForm={() => changeForm()}
      />

      <Navbar auth={auth} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
