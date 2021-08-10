/* eslint-disable import/prefer-default-export */

import { toast } from "react-toastify";
import Firebase from "../Firebase";

// Add the functions used in firebase here.
export const usersRef = Firebase.firestore().collection("users");
export const postsRef = Firebase.firestore().collection("posts");

// adds user with info to users collection

export const setUser = ({ email, name }, id) =>
  usersRef
    .doc(id)
    .set({
      contact: { email },
      name,
      description: null,
      job: null,
      gender: null,
      langSelected: 1,
      location: null,
      picture: null,
      languages: [],
      pinnedPosts: [],
    })
    .catch((e) =>
      toast.error(e.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    );

export const signUp = ({ email, password, name }, callback) => {
  try {
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.sendEmailVerification({
          url: "https://i-can-help-20773.web.app",
        });

        setUser({ email, name }, user.uid).then(() => Firebase.auth().signOut());
      })
      .then(() => {
        toast.success("Email verification sent", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        if (callback) callback();
      })
      .catch((e) =>
        toast.error(e.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }),
      );
  } catch (error) {
    toast.error(error.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const signout = () =>
  Firebase.auth()
    .signOut()
    .catch((e) =>
      toast.error(e.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    );

const { LOCAL, SESSION } = Firebase.auth.Auth.Persistence;

export const signIn = ({ email, password, remember }, callback) =>
  // check remember state

  Firebase.auth()
    .setPersistence(remember ? LOCAL : SESSION)
    .then(() =>
      // sign in with credentials

      Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then((r) => {
          // check verification

          if (!r.user.emailVerified) {
            signout();
            toast.error("Please verify to log in", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            return false;
          }
          toast.success("Welcome Back 👋", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          if (callback) callback();
          return true;
        })
        .catch((e) =>
          toast.error(e.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }),
        ),
    )
    .catch((e) =>
      toast.error(e.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    );

export const getUser = async (id) => {
  const data = await usersRef
    .doc(id)
    .get()
    .then((snapshot) => snapshot)
    .catch((e) =>
      toast.error(e.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    );

  return data;
};

export const getusers = () => usersRef.get();

export const uploadImage = (image, callback) => {
  const storageRef = Firebase.storage().ref();
  const imageRef = storageRef.child(image.name);

  if (image) {
    imageRef.put(image).then(() => callback(imageRef));
  } else {
    toast.error("Please upload an image first.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return imageRef;
};

export const updatePicture = (image) => uploadImage(image, (ref) => ref.getDownloadURL());

export const post = (values, userId, callback) => {
  uploadImage(values.picture, (ref) => {
    ref.getDownloadURL().then((url) => {
      const data = {
        createdDate: values.createdDate,
        jobDescription: values.jobDescription,
        employment: values.employment,
        price: values.price,
        time: values.time || values.employment,
        title: values.title,
        type: values.type,
        picture: url,
        userId,
        jobType: values.jobType,
        location: values.location,
        gender: values.gender,
      };

      try {
        usersRef
          .doc(userId)
          .collection("posts")
          .add(data)
          .then(() => {
            toast.success("Posted ✔️", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            callback();
          })
          .catch((e) => console.log(e));
      } catch (error) {
        console.log(error);
      }
    });
  });
};

export const pinPost = (userId, postId) => {
  if (Firebase.auth().currentUser)
    return usersRef
      .doc(userId)
      .update({
        pinnedPosts: Firebase.firestore.FieldValue.arrayUnion(postId),
      })
      .catch((e) =>
        toast.error(e.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }),
      );

  return toast.error("Log in to Pin Posts", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const unPinPost = (userId, postId) =>
  usersRef
    .doc(userId)
    .update({
      pinnedPosts: Firebase.firestore.FieldValue.arrayRemove(postId),
    })
    .catch((e) =>
      toast.error(e.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    );

export const deletePost = (postId, userId) =>
  postsRef
    .doc(postId)
    .delete()
    .then(() => usersRef.doc(userId).collection("posts").doc(postId).delete())
    .then(() =>
      usersRef.get().then((snapshot) =>
        snapshot.docs.forEach((user) => {
          if (user?.data()?.pinnedPosts?.includes(postId)) unPinPost(user?.id, postId);
        }),
      ),
    )
    .catch((e) =>
      toast.error(e.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    );

export const updateUser = async (values, id) => {
  if (typeof values.picture === "object")
    return usersRef
      .doc(id)
      .update({
        ...values,
        picture: await updatePicture(values.picture, id).getDownloadURL(),
      })
      .catch((e) =>
        toast.error(e.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }),
      );

  return usersRef
    .doc(id)
    .update({
      ...values,
    })
    .catch((e) =>
      toast.error(e.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    );
};

export const addLanguage = (userId, language) =>
  usersRef.doc(userId).update({ languages: Firebase.firestore.FieldValue.arrayUnion(language) });

export const removeLanguage = (userId, language) =>
  usersRef.doc(userId).update({ languages: Firebase.firestore.FieldValue.arrayRemove(language) });

export const resetPassword = (email) => {
  if (email)
    return Firebase.auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        toast.success("Reset Email sent", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }),
      )
      .catch((e) =>
        toast.error(e.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }),
      );

  return toast.error("Please Enter an Email", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
