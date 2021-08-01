import LoggedIn from "../../Utilities/auth/Auth";
import PostDetailsPage from "./postDetailsPage";

export default function PostDetail() {
  return (
    <LoggedIn>
      <PostDetailsPage />
    </LoggedIn>
  );
}
