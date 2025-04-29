import { RouterProvider } from "react-router";

import { router } from "./router";

const AppRouterWrapper = () => {
  return <RouterProvider router={router} />;
};

export default AppRouterWrapper;
