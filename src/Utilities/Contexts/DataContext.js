import { createContext } from "react";

const DataContext = createContext({
  userData: null,
  posts: [],
  loading: true,
  getPosts: () => {},
});

export default DataContext;
