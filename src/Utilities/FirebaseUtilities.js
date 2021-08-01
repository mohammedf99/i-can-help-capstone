/* eslint-disable import/prefer-default-export */

import Firebase from "../Firebase";

// Add the functions used in firebase here.
const usersRef = Firebase.firestore().collection("users");
const postsRef = Firebase.firestore().collection("posts");
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

export const updateUser = (values, id) => {
  try {
    usersRef.doc(id).update({
      ...values,
    });
  } catch (error) {
    alert(error);
  }
};

export const signUp = ({ email, password, name }, callback) => {
  try {
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) =>
        user.sendEmailVerification({
          url: "https://i-can-help-20773.web.app",
        })
      )
      .then(() => {
        alert("signup success");
        setUser({ email, name }, Firebase.auth().currentUser.uid);
        callback();
      });
  } catch (error) {
    alert(error);
  }
};

export const signIn = ({ email, password }, callback) => {
  try {
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((r) => {
        if (!r.user.emailVerified) return alert("please verify to log in");
        alert("signin success");
        callback();
      })
      .catch((e) => alert(e.message));
  } catch (error) {
    alert(error.message);
  }
};

export const post = (values, user) => {
  try {
    postsRef.add({
      createdDate: values.createdDate,
      description: values.description,
      employment: values.employment,
      gender: user.gender,
      location: user.location,
      pictures: values.pictures,
      price: values.price,
      time: values.time,
      title: values.title,
      type: values.type,
      user: user.id,
      views: 0,
    });
  } catch (error) {
    alert(error);
  }
};

export const signout = (callback) => {
  try {
    Firebase.auth()
      .signOut()
      .then(callback)
      .catch((e) => alert(e.message));
  } catch (e) {
    alert(e.message);
  }
};
