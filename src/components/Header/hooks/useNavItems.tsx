import { useMatchRoute } from "../../../hooks";

const useNavItems = () => {
  const isAbout = useMatchRoute("about");
  const isMenu = useMatchRoute("menu");
  const isReservations = useMatchRoute("reservations");
  const isOrder = useMatchRoute("order");

  type navItemType = {
    to: string;
    text: string;
    isMatch: boolean;
  };

  const navItems: navItemType[] = [
    {
      to: "about",
      text: "About Us",
      isMatch: isAbout,
    },
    {
      to: "menu",
      text: "Menu",
      isMatch: isMenu,
    },
    {
      to: "reservations",
      text: "Reservations",
      isMatch: isReservations,
    },
    {
      to: "order",
      text: "Order Online",
      isMatch: isOrder,
    },
  ];

  return navItems;
};

export default useNavItems;
