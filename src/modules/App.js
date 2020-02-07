import React from 'react';
import clsx from 'clsx';
import { Drawer, AppBar, Toolbar, IconButton, CssBaseline } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useStyles, useTheme } from '../dependences/material';

import logo from './logo.svg';
import './App.css';



function App() {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  }

  return (
    <div className="App">

      <CssBaseline />

      <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open })} >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} 
            className={clsx(classes.menuButton, open && classes.hide)} >
            <Menu />
          </IconButton>
          <h2>Bethesda App</h2>
        </Toolbar>
      </AppBar>

      

    </div>
  );
}

export default App;
