import React from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';

interface Props {
  selectedTabIndex: number;
  onTabChange: (index: number) => void;
}


const Header: React.FC<Props> = ({ selectedTabIndex = 0, onTabChange = () => {} })=> {
  const handleTabChange = (event: React.ChangeEvent<{}>, newIndex: number) => {
    onTabChange(newIndex);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Car Shop
        </Typography>
        <Tabs value={selectedTabIndex} onChange={handleTabChange}>
          <Tab label="Inventory" />
          <Tab label="Add Cars" />
          <Tab label="Customers" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
