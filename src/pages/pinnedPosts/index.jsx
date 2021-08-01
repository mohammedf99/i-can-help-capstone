import LoggedIn from "../../Utilities/auth/Auth";
import PinnedPostsPage from "./pinnedPostsPage";

export default function PinnedPosts() {
  return (
    <LoggedIn>
      <PinnedPostsPage />
    </LoggedIn>
  );
}
