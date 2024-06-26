import "./SideBar.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Link } from "react-router-dom";

export default function SideBar() {
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className="sidebar-drawer"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['rutinas', 'ejercicios', 'planing'].map((text) => (
          <Link to={`/${text}`} key={text} className="sidebar-link">
            <ListItem disablePadding className="sidebar-list-item">
              <ListItemButton>
                <ListItemIcon className="sidebar-link">
                  {displayIcons(text)}
                </ListItemIcon>
                <ListItemText primary={text.toUpperCase()} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const displayIcons = (text) => {
    if (text === "ejercicios") return <FitnessCenterIcon />;
    if (text === "planing") return <FitnessCenterIcon />;
    if (text === "rutinas") return <MailIcon />;
  }

  return (
    <div>
      <React.Fragment>
        <MenuIcon className="sidebar-menu-icon" onClick={toggleDrawer('left', true)} />
        <Drawer
          anchor="left"
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
