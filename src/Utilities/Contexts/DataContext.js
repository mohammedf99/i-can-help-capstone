import { createContext } from "react";

const DataContext = createContext({
  userData: null,
  posts: [],
  loading: true,
});

export default DataContext;
