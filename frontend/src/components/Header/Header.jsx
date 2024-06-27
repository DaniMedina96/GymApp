import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import SideBar from "./SideBar/SideBar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function ButtonAppBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <Box>
      <AppBar position="fixed" className="app-bar">
        <Toolbar className="toolbar">
          <SideBar />
          <Link to="/" className="link">
            <Typography variant="h6" component="div">
              Home
            </Typography>
          </Link>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {localStorage.getItem('token') ? (
              <>
                <Button className="button" onClick={handleLogout}>Logout</Button>
                <Avatar
                  alt="Profile Picture"
                  src="https://via.placeholder.com/150" // Aquí puedes colocar la URL de la imagen de perfil del usuario
                  className="avatar"
                  onClick={handleProfileClick}
                />
              </>
            ) : (
              <>
                <Link to="/login" className="link">
                  <Button className="button">Login</Button>
                </Link>
                <Link to="/signup" className="link" style={{ marginLeft: '10px' }}>
                  <Button className="button">SignUp</Button>
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
