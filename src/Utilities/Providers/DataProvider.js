import { useState, useEffect, useContext } from "react";
import AuthContext from "../Contexts/AuthContext";
import DataContext from "../Contexts/DataContext";
import { getUser, getusers, usersRef } from "../FirebaseUtilities";

const DataProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  const [userData, setUserData] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser) {
      getUser(currentUser.uid).then((user) => setUserData(user.data()));
    } else setUserData(null);
  }, [currentUser]);

  useEffect(() => {
    getusers()
      .then((users) =>
        users.docs.forEach((user) =>
          usersRef
            .doc(user.id)
            .collection("posts")
            .get()
            .then((snapshot) => {
              snapshot.docs.forEach((post) =>
                setPosts((prev) => [...prev, post])
              );
            })
            .catch((e) => console.log(e))
        )
      )
      .then(() => setLoading(false));
  }, []);

  return (
    <DataContext.Provider value={{ userData, posts, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
