import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Flightdetails from "./Flightdetail";
import history from "../helpers/history";


export default function ButtonAppBar() {

    const navigateToLogin=()=>{
        console.log("On navigate button click assasasa");
        history.push("/SignIn");
    }

  return (
    <div style={{
      backgroundImage: 'url("https://wallpaperaccess.com/full/254361.jpg")',
      height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment:"fixed", backgroundPosition:"center"
    }}>
      
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rocket Airline
          </Typography>
          <Button onClick={navigateToLogin}  color="inherit">Sign In</Button>
        </Toolbar>
      </AppBar>
      <Flightdetails />
    </Box>
   </div> 
  );
}