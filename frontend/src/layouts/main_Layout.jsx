import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { Box } from "@mui/material"


function Root() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column',justifyContent: 'space-between', height: '100vh' }}>
        <Header/>
        <Outlet/>
        <Footer/>
    </Box>
  )
}

export default Root