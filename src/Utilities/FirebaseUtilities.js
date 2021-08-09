/* eslint-disable import/prefer-default-export */

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
    .catch((e) => alert(e));

export const updateUser = (values, id) => {
  try {
    usersRef
      .doc(id)
      .update({
        ...values,
      })
      .catch((e) => alert(e));
  } catch (error) {
    alert(error);
  }
};

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
        alert("signup success");
        if (callback) callback();
      })
      .catch((e) => alert(e));
  } catch (error) {
    alert(error);
  }
};

export const signout = () =>
  Firebase.auth()
    .signOut()
    .catch((e) => alert(e.message));

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
            alert("please verify to log in");
            return false;
          }
          alert("signin success");
          if (callback) callback();
          return true;
        })
        .catch((e) => alert(e.message)),
    )
    .catch((e) => alert(e));

export const getUser = async (id) => {
  const data = await usersRef
    .doc(id)
    .get()
    .then((snapshot) => snapshot)
    .catch((e) => alert(e.message));

  return data;
};

export const getusers = () => usersRef.get();

export const uploadImage = (image, callback) => {
  const storageRef = Firebase.storage().ref();
  const imageRef = storageRef.child(image.name);

  if (image) {
    imageRef
      .put(image)
      .then(() => {
        alert("Image uploaded successfully to Firebase.");
      })
      .then(() => callback(imageRef));
  } else {
    alert("Please upload an image first.");
  }

  return imageRef;
};

export const updatePicture = (image, userId) => {
  uploadImage(image, (ref) =>
    ref
      .getDownloadURL()
      .then((url) => updateUser({ picture: url }, userId))
      .catch((e) => console.log(e)),
  );
};

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
            alert("success");
            callback();
          })
          .catch((e) => console.log(e));
      } catch (error) {
        console.log(error);
      }
    });
  });
};

export const pinPost = (userId, postId) =>
  usersRef
    .doc(userId)
    .update({
      pinnedPosts: Firebase.firestore.FieldValue.arrayUnion(postId),
    })
    .then(() => console.log("pinned"))
    .catch((e) => console.log(e));

export const unPinPost = (userId, postId) =>
  usersRef
    .doc(userId)
    .update({
      pinnedPosts: Firebase.firestore.FieldValue.arrayRemove(postId),
    })
    .then(() => console.log("un pin"))
    .catch((e) => console.log(e));

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
    .catch((e) => alert(e));
