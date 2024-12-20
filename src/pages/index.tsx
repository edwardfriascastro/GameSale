import { createBrowserRouter } from "react-router-dom";
import ErrorDetail from "./ErrorDetail";
import Layouts from "./Layouts";
import Home from "./Home";
import Games from "./Games";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: (
      <Layouts>
        <ErrorDetail />
      </Layouts>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "/games", element: <Games /> },
    ],
  },
]);

export default router;
