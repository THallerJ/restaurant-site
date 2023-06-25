import Welcome from "./components/Welcome/Welcome";
import { Divider } from "../../components";
import MailingList from "./components/MailingList";
import Hours from "./components/Hours";
import LiveMusic from "./components/LiveMusic";
import { Gallery } from "../../components";
import { food1, food2, food3, food4, interior, open } from "../../assets";

const HomePage = () => {
  const images = [food1, food2, food3, food4, interior, open];

  return (
    <>
      <Welcome />
      <Divider />
      <div className="bg-offwhite">
        <Hours />
        <LiveMusic />
        <Gallery images={images} />
        <MailingList />
      </div>
      <Divider />
    </>
  );
};

export default HomePage;
