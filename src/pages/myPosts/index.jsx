import LoggedIn from "../../Utilities/auth/Auth";
import MyPostsPage from "./myPostsPage";

export default function MyPosts() {
  return (
    <LoggedIn>
      <MyPostsPage />
    </LoggedIn>
  );
}
