import LoggedIn from "../../Utilities/auth/Auth";
import HomePage from "./homePage";

export default function Home() {
  return (
    <LoggedIn>
      <HomePage />
    </LoggedIn>
  );
}
