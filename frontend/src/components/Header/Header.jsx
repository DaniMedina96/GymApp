import "./Header.css"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import SideBar from "./SideBar/SideBar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.clear();
    navigate("/login")
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <SideBar/>
          <Link style={{
            textDecoration: "none",
            color: "White", // Color del texto
            padding: "10px 20px", // Espaciado interior
            borderRadius: "5px", // Bordes redondeados
            backgroundColor: "blue", // Color de fondo
            transition: "background-color 0.3s ease", // Transición suave en el cambio de color
            display: "inline-block", // Para que el padding se aplique correctamente
          }} to={""}>
          <Typography variant="h6" component="div" >
            Home
          </Typography>
          </Link>
          
          {
            localStorage.getItem('token') ? (<Button color="inherit" onClick={handlelogout}>Logout</Button>) : (<Box  >
              <Link to={"/login"}>
                <Button color="inherit">Login</Button>
              </Link>
              <Link to={"/signup"}>
                <Button color="inherit">SignUp</Button>
              </Link>
            </Box>)
          }

         

        </Toolbar>
      </AppBar>
    </Box>
  );
}
