import { AboutPage, HomePage, MenuPage, ReservationsPage } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { OrderPage } from "./pages/Order";
import { HeaderLayout } from "./layouts";

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
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
    <div className="h-screen overflow-hidden bg-dark">
      <div className="h-full overflow-auto" id="page-body">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
