import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import AuthContext from "../Contexts/AuthContext";
import DataContext from "../Contexts/DataContext";
import { getusers, usersRef } from "../FirebaseUtilities";

const DataProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  const [userData, setUserData] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (currentUser) {
      usersRef.doc(currentUser.uid).onSnapshot((snapshot) => setUserData(snapshot.data()));
    } else setUserData(null);
  }, [currentUser]);

  const getPosts = () => {
    setPosts([]);
    getusers()
      .then((users) =>
        users.docs.forEach((user) =>
          usersRef
            .doc(user.id)
            .collection("posts")
            .get()
            .then((snapshot) => {
              snapshot.docs.forEach((post) => setPosts((prev) => [...prev, post]));
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
        ),
      )
      .then(() => setLoading(false));
  };

  useEffect(() => {
    getPosts();
  }, [router.route]);

  return (
    <DataContext.Provider value={{ userData, posts, loading, getPosts }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
