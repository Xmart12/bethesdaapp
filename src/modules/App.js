import React, { useState } from 'react';
import clsx from 'clsx';
import { Router, Route, Link } from 'react-router-dom';
import { Drawer, AppBar, Toolbar, IconButton, CssBaseline, Divider, List, ListItem, ListItemText } from '@material-ui/core';
import { Menu, ChevronRight, ChevronLeft } from '@material-ui/icons';
import { useStyles, useTheme } from '../dependences/material';

import logo from './logo.svg';
import './App.css';
import Movements from './movements/Movements';
import Test from './test/test';


function App() {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState("Test");

  const onItemClick = (title) => {
    //setTitle(title);
    //setDrawer(drawer);
  };

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

      <Router>

        <Drawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{ paper: classes.drawerPaper }}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              { theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight /> }
            </IconButton>
            <Divider/>
            <List>

              <ListItem button component={Link} to="/" onClick={onItemClick("Test")}>
                <ListItemText>Home</ListItemText>
              </ListItem>
              <ListItem button component={Link} to="/Movements" onClick={onItemClick("Movements")}>
                <ListItemText>Page 1</ListItemText>
              </ListItem>

            </List>
          </div>
        </Drawer>

        <main className={clsx(classes.content, { [classes.contentShift]: open })}>

        <div className={classes.drawerHeader} />

        <Route exact path="/" component={Test} />
        <Route path="/Movements" component={Movements} />

      </main>

      </Router>
    </div>
  );
}

export default App;
