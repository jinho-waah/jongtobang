import { createBrowserRouter, Outlet } from "react-router-dom";
import Main from "./pages/main/Main";
import Ticker from "./pages/ticker/Ticker";
import { pageRoutes } from "./apiRoutes";

const CommonLayout = () => <Outlet />;

const router = createBrowserRouter([
  {
    element: <CommonLayout />,
    children: [
      {
        path: pageRoutes.main,
        element: <Main />,
      },
      {
        path: pageRoutes.ticker,
        element: <Ticker />,
      },
    ],
  },
]);

export default router;
