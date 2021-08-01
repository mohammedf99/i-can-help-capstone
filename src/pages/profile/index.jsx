import LoggedIn from "../../Utilities/auth/Auth";
import ProfilePage from "./profilePage";

export default function Profile() {
  return (
    <LoggedIn>
      <ProfilePage />
    </LoggedIn>
  );
}
