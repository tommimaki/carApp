import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography, Button, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';
import { Car} from './interface/Car'



interface HeaderProps {
  onAddCarClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddCarClick }) =>{

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4"  component="div" sx={{ flexGrow: 1, fontWeight:'bold' }}>
          Car Shop
        </Typography>
        <Button variant='outlined' color="inherit" sx={{marginRight: '20%'}} onClick={onAddCarClick}>
          Add Car
        </Button>
      </Toolbar>

    </AppBar>
  );
};

export default Header;

