import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormLabel from '@mui/material/FormLabel';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import history from "../helpers/history";
import Header from './Header';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import StepButton from '@mui/material/StepButton';
import countries from "i18n-iso-countries";
import { useEffect, useState } from "react";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import axios from "axios"

<text>Start your MileagePlus adventure by creating an account. Our MileagePlus loyalty program is free to join and rewards you with miles when you fly and when you enjoy everyday activities and experiences.

</text>


const theme = createTheme();

export default function SignUp() {
  const [value, setValue] = React.useState(null);
  const [value1, setValue1] = React.useState(null);
  

  const navigateToContact=()=>{
    console.log("On navigate button click assasasa");
    // history.push("/SignIn");
}


const handleChange = (event) => {
  setValue(event.target.value);
};

const [values, setValues] = React.useState({
  amount: '',
  password: '',
  weight: '',
  weightRange: '',
  showPassword: false,
});

const handleChange1 = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
};

const handleClickShowPassword = () => {
  setValues({
    ...values,
    showPassword: !values.showPassword,
  });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

  const handleSubmit = async (event) => {
    const data = values;
    data.dob=value;
    

    let response = await axios.post("http://localhost:8080/user/register",{
      first_name:data["firstName"],
      last_name:data["lastName"],
      email: data['email'],
      password: data['password'],
      state:data["state"],
      zip:data["zip"],
      city:data["city"],
      dob:data["dob"],
      passport:data["passport"]
    },{headers:{"Content-Type":"application/json"}})
    // eslint-disable-next-line no-console
    /*console.log({
      email: data.get('email'),
      password: data.get('password'),
    });*/

    

  };


  return (
    
    <ThemeProvider theme={theme}>
      <Header/>
      <Container component="main" maxWidth="xs">
        
        <CssBaseline />
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            <b>Sign up</b>
          </Typography>
          <br></br>
          <Typography component="h1" variant="h5">
            <b>About Me</b>
          </Typography>
          <Box component="form" onSubmit={async (event)=>{await handleSubmit(event)}}    sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              {/* <FormLabel component="legend">First Name*</FormLabel><br></br> */}
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={handleChange1("firstName")}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
              {/* <FormLabel component="legend">Last Name*</FormLabel><br></br> */}
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleChange1("lastName")}
                />
                <br></br>
              </Grid>
              
              <Grid item xs={12}>
                <FormLabel component="legend">Gender*</FormLabel>
                <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Unspecified" />
                </RadioGroup>
              </Grid>

              <Grid item xs={12}>
              <FormLabel component="legend">Date Of Birth*</FormLabel><br></br>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
              required
                label="MM/DD/YYYY"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
              <FormLabel component="legend">Passport Number:*</FormLabel><br></br>
                <TextField
                  required
                  fullWidth
                  id="passportNum"
                  label="Passport Number"
                  name="passportNum"
                  onChange={handleChange1("passport")}
                  autoComplete="family-name"
                />
                <br></br>
              </Grid>
              </Grid><br></br>
              
              <Grid item xs={12}>
              <FormLabel component="legend">Address*</FormLabel><br></br>
              <TextField fullWidth sx={{ m: 0 }}
                id="outlined-multiline-flexible"
                label="Address"
                multiline
                maxRows={4}
                value={value1}
                onChange={handleChange1("address")}
                />
              </Grid><br></br>

              <Grid item xs={12}>
              <FormLabel component="legend">City*</FormLabel><br></br>
              <TextField fullWidth sx={{ m: 0 }}
                id="outlined-multiline-flexible"
                label="City"
                multiline
                maxRows={4}
                value={value1}
                onChange={handleChange1("city")}
                />
              </Grid><br></br>

              <Grid item xs={12}>
              <FormLabel component="legend">State*</FormLabel><br></br>
              <TextField fullWidth sx={{ m: 0 }}
                id="outlined-multiline-flexible"
                label="State"
                multiline
                name="state"
                maxRows={4}
                value={value1}
                onChange={handleChange1("state")}
                />
              </Grid><br></br>
  
              <Grid item xs={12}>
              <FormLabel component="legend">Zip Code*</FormLabel><br></br>
              <TextField fullWidth sx={{ m: 0 }}
                id="outlined-multiline-flexible"
                label="Zip Code"
                name="zipcode"
                multiline
                maxRows={4}
                value={value1}
                onChange={handleChange1("zip")}
                />
              </Grid>   <br></br>        
                        
              <Grid item xs={12}>
              <InputLabel htmlFor="standard-adornment-password">Email*</InputLabel><br></br>
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange1("email")}
                />
              </Grid><br></br>

              <Grid item xs={12}>
              <InputLabel htmlFor="standard-adornment-password">Password*</InputLabel><br></br>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                
                <OutlinedInput
                    id="outlined-adornment-password"
                    label="Password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange1('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        label="Password"
                        edge="end"
                        >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
                </FormControl>  



            </Grid>
            <Grid>
            
            </Grid>
            <Button
              
              type="submit"
              halfWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}  
            >
              Submit
            </Button>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}