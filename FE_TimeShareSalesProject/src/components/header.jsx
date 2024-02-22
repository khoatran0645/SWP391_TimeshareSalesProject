import { Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AppBar, Box } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../assets/images/TimeShare.png";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar color="inherit" position="static" sx={{ display: "flex" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{m: 2}}>
            <IconButton onClick={toggleMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to={"/"}>Trang chủ</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to={"/introduction"}>Giới thiệu timeshare</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to={"/more"}>Giới thiệu tiện ích</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to={"/detail/S1.112305"}>Bán Timeshare</Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <Link to={"/"}>
            <img src={logo} style={{ width: "120px", height: "auto" }} />
            </Link>
          </Box>
          <Box>
            <Button variant="contained" sx={{ m: 1 }}>Login</Button>
            <Button variant="contained" sx={{ m: 1 }}>Signin</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};