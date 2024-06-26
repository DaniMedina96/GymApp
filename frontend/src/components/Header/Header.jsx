import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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

  const buttonStyle = {
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#ff4500', // Usando el color del footer-bottom
    transition: 'background-color 0.3s ease',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#ffcc00', // Usando el color hover del footer-link
    }
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white'
  };

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: '#ff4500' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <SideBar />
          <Link to="/" style={linkStyle}>
            <Typography variant="h6" component="div" sx={{ color: 'white' }}>
              Home
            </Typography>
          </Link>
          <Box>
            {localStorage.getItem('token') ? (
              <Button sx={buttonStyle} onClick={handleLogout}>Logout</Button>
            ) : (
              <>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <Button sx={buttonStyle}>Login</Button>
                </Link>
                <Link to="/signup" style={{ textDecoration: 'none', marginLeft: '10px' }}>
                  <Button sx={buttonStyle}>SignUp</Button>
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
