import { Gallery, Divider } from "../../components";
import { chefFire, barStaff, kitchenStaff } from "../../assets";
import { imageType } from "../../components";

const AboutPage = () => {
  const images: imageType[] = [
    { image: chefFire },
    { image: barStaff, position: "right" },
    { image: kitchenStaff },
  ];

  return (
    <div className="flex w-full flex-col items-center bg-offwhite">
      <div className="p-12 md:w-[50%] ">
        <h2 className="heading">Meet Our Staff</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit
          non arcu et pellentesque. Duis id justo et nisl aliquet interdum.
          Proin sollicitudin magna velit, non sagittis augue condimentum id.
          Suspendisse sit amet consequat urna, eget aliquam nulla. Vivamus eu
          dapibus tortor. Cras finibus justo ut metus tempus bibendum. Nulla
          turpis mauris, dictum eu mollis quis, dapibus sagittis ante. Nam a
          tellus vitae sem cursus dictum eu sed urna. Cras eleifend, quam
          finibus tristique tristique, tellus nibh tempor est, a congue massa
          nunc id dui. Vestibulum purus tortor, lacinia id sem in, venenatis
          efficitur sapien. Morbi fermentum, nulla vehicula maximus faucibus,
          ante lorem tempus nisl, ut vehicula metus orci sit amet ex. Proin non
          lectus semper, fringilla odio vitae, venenatis dolor.
        </p>
      </div>

      <Gallery images={images} layout="start" />
      <Divider />
    </div>
  );
};

export default AboutPage;
