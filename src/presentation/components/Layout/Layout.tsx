import { Outlet } from "react-router";
import { lazy } from "react";

const Navbar = lazy(() => import("./Navbar"));
const Footer = lazy(() => import("./Footer"));

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gray-800 h-screen overflow-scroll">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
