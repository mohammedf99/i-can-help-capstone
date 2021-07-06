/* eslint-disable import/prefer-default-export */

import Firebase from "../Firebase";

// Add the functions used in firebase here.
const usersRef = Firebase.firestore().collection("users");
// adds user with info to users collection

export const setUser = ({ email, name }, id) => {
  usersRef.doc(id).set({
    contact: { email },
    name,
    description: null,
    job: null,
    gender: null,
    langSelected: 1,
    location: null,
    picture: null,
    languages: [],
    posts: [],
    pinnedPosts: [],
  });
};

export const signUp = ({ email, password, name }) => {
  try {
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) =>
        user.sendEmailVerification({
          url: "https://i-can-help-20773.web.app",
        })
      )
      .then(() => setUser({ email, name }, Firebase.auth().currentUser.uid));
  } catch (error) {
    alert(error.message);
  }
};
