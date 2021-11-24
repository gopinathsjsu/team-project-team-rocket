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
        if(JSON.parse(localStorage.getItem("authenticated")))
        {
          localStorage.setItem("authenticated",false);
        }
        console.log("On navigate button click assasasa");
        history.push("/SignIn");
    }

  return (
    <div style={{
      backgroundImage: 'url("https://free4kwallpapers.com/uploads/originals/2020/05/31/-beautiful-sunset-with-a-rocket-wallpaper.png")',
      height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment:"fixed", backgroundPosition:"center"
    }}>
      
    <Box sx={{ flexGrow: 1}} >
      <AppBar position="static">
        
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rocket Airline
          </Typography>
          {console.log(JSON.parse(localStorage.getItem("authenticated"))) }
          <Button onClick={navigateToLogin}  color="inherit">{JSON.parse(localStorage.getItem("authenticated"))?"Sign Out":"Sign In"}</Button>
        </Toolbar>
        
      </AppBar>
      
      <Flightdetails />
    </Box>
   </div> 
  );
}