import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography, Button, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';
import { Car} from './interface/Car'



const Header: React.FC = ()=> {

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Car Shop
        </Typography>
        <Tabs>
          <Tab label="Inventory" />
          <Tab label="Add Cars" />
          <Tab label="Customers" />
        </Tabs>
      </Toolbar>

    </AppBar>
  );
};

export default Header;

