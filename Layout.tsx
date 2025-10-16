import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link as RouterLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Email Assistant
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            About
          </Button>
          <Button color="inherit" component={RouterLink} to="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box sx={{ mt: 2 }}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default Layout;
