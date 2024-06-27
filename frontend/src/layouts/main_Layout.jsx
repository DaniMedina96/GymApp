import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Box } from "@mui/material";
import "./main_Layout.css";

function Root() {
  return (
    <Box className="root-container">
        <Header />
        <Box className="content">
          <Outlet />
        </Box>
        <Footer />
    </Box>
  );
}

export default Root;