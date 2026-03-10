import { Outlet } from "react-router-dom";
import Navbar from "../components/commons/Navbar";
import Footer from "../components/commons/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
