import Welcome from "./components/Welcome/Welcome";
import { Divider } from "../../components";
import MailingList from "./components/MailingList";
import Hours from "./components/Hours";
import LiveMusic from "./components/LiveMusic";
import { Gallery } from "../../components";
import { exterior, seating, eating } from "../../assets";

const HomePage = () => {
  const images = [seating, exterior, eating];

  return (
    <>
      <Welcome />
      <Divider />
      <div className="bg-offwhite">
        <Hours />
        <LiveMusic />
        <Gallery images={images} layout="middle" />
        <MailingList />
      </div>
      <Divider />
    </>
  );
};

export default HomePage;
