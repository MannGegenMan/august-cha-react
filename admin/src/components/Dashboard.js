import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Dashboard
      </Typography>
      <Box display="flex" justifyContent="space-around">
        <Button component={Link} to="/products" variant="contained" color="primary">
          Manage Products
        </Button>
        <Button component={Link} to="/categories" variant="contained" color="secondary">
          Manage Categories
        </Button>
      </Box>
    </Container>
  );
};

export default Dashboard;