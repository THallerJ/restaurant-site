import { AboutPage, HomePage, MenuPage, ReservationsPage } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { OrderPage } from "./pages/Order";
import { HeaderLayout } from "./layouts";
import { HeaderLayoutContextProvider } from "./Contexts";

const router = createBrowserRouter([
  {
    element: (
      <HeaderLayoutContextProvider>
        <HeaderLayout />
      </HeaderLayoutContextProvider>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/menu", element: <MenuPage /> },
      { path: "/reservations", element: <ReservationsPage /> },
      { path: "/order", element: <OrderPage /> },
    ],
  },
]);

function App() {
  return (
    <div className="h-screen overflow-hidden bg-offwhite">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
