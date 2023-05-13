import Welcome from "./components/Welcome";
import { Divider } from "../../components";
import MailingList from "./components/MailingList";
import Hours from "./components/Hours";
import LiveMusic from "./components/LiveMusic";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <Divider />
      <div className="bg-offwhite">
        <Hours />
        <LiveMusic />
        <MailingList />
      </div>
      <Divider />
    </>
  );
};

export default HomePage;
