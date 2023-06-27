import { Gallery, Divider } from "../../components";
import {
  chefFire,
  barStaff,
  kitchenStaff,
  founder1,
  founder2,
} from "../../assets";
import { imageType } from "../../components";

const AboutPage = () => {
  const founderImages: imageType[] = [{ image: founder1 }, { image: founder2 }];
  const staffImages: imageType[] = [
    { image: chefFire },
    { image: barStaff, position: "right" },
    { image: kitchenStaff },
  ];

  return (
    <div className="flex w-full flex-col items-center bg-offwhite">
      <div className="p-12 md:w-[50%]">
        <h2 className="heading">Who are we?</h2>
        <p>
          Nulla cursus felis nec quam scelerisque hendrerit at vitae massa.
          Donec eget tempor est. Aenean nec justo nec ex sagittis posuere. Nam
          non metus iaculis, ullamcorper magna non, imperdiet felis. Nulla at
          felis eu quam suscipit pulvinar at aliquet dolor. Fusce dictum augue
          vel dignissim imperdiet. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. In eget
          egestas elit. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Etiam justo libero, interdum ut mauris
          id, interdum tincidunt purus. Ut eget orci ac nunc blandit gravida.
          Donec condimentum ante sed laoreet porttitor.
        </p>
        <p className="pt-4">
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
      <Gallery images={founderImages} layout="wide" />

      <div className="p-12 md:w-[50%]">
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
      <Gallery images={staffImages} layout="start" />
      <div className="flex h-72 w-full flex-col items-center bg-third">
        <div className="w-[50%] p-12">
          <h2 className="heading">Where are We?</h2>
          INSERT GOOGLE MAPS
        </div>
      </div>

      <Divider />
    </div>
  );
};

export default AboutPage;
