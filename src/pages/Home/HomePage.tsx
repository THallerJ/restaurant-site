import Welcome from "./components/Welcome/Welcome";
import { Divider } from "../../components";
import MailingList from "./components/MailingList";
import Hours from "./components/Hours";
import LiveMusic from "./components/LiveMusic";
import { Gallery } from "../../components";
import { exterior, seating, eating } from "../../assets";
import { imageType } from "../../components";

const HomePage = () => {
  const images: imageType[] = [
    { image: seating },
    { image: exterior },
    { image: eating, position: "left" },
  ];

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
