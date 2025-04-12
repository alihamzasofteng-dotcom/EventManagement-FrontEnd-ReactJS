import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => (
  <>
    <NavBar />
    <Box>
      <Outlet />
    </Box>
    <Footer />
  </>
);

export default Layout;
