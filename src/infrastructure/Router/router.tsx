import { createBrowserRouter } from "react-router";
import Layout from "../../presentation/components/Layout/Layout";
import {
  ProtectedRoute,
  PublicRoute,
} from "../../application/useCase/PermissionsRouter";
import Loading from "../../presentation/components/Loading";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../../presentation/screens/Home"));
const Login = lazy(() => import("../../presentation/screens/Login"));

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <PublicRoute />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
