import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import history from "../helpers/history";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import DehazeIcon from '@mui/icons-material/Dehaze';

export default function ButtonAppBar() {

    const navigateToLogin=()=>{
        if(JSON.parse(localStorage.getItem("authenticated")))
        {
          localStorage.setItem("authenticated",false);
        }
        console.log("On navigate button click assasasa");
        history.push("/SignIn");
    }

    const navigateToHeader=()=>{
        console.log("On navigate button click assasasa");
        history.push("/");
    }

    const [state, setState] = React.useState({
        right: false,
      });

      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
        {['Profile', 'My Trips',].map((text, index) => (
          <ListItem button key={text}>
            
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
        </Box>
      )
  return (
      
    <Box sx={{ flexGrow: 1}} >
      <AppBar position="static">
        
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         <Button onClick={navigateToHeader} color="inherit" > Rocket Airline </Button>
          </Typography>
          <Button onClick={navigateToLogin}  color="inherit">{JSON.parse(localStorage.getItem("authenticated"))?"Sign Out":"Sign In"}</Button>
          {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><DehazeIcon style={{color:"white"}}/></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
        </Toolbar>  
      </AppBar>   
      <div>
      
    </div>
    </Box>
   
  );
}