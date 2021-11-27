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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import history from "../helpers/history";
import Header from './Header';

<text>Start your MileagePlus adventure by creating an account. Our MileagePlus loyalty program is free to join and rewards you with miles when you fly and when you enjoy everyday activities and experiences.

</text>




const theme = createTheme();

export default function MSignUp() {
  const [value, setValue] = React.useState(null);

  const [selectedCountry, setSelectedCountry] = useState("");

    const selectCountryHandler = (value) => setSelectedCountry(value);
    countries.registerLocale(enLocale);
    countries.registerLocale(itLocale);
    const countryObj = countries.getNames("en", { select: "official" });
  
    const countryArr = Object.entries(countryObj).map(([key, value]) => {
      return {
        label: value,
        value: key
      };
  });
  
  const navigateToMInfo=()=>{
    console.log("Navigate to Next page");
    history.push("/MemberInfo");
}




  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
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
            <b>Member Sign up</b>
          </Typography>
          <br></br>
          <Typography component="h1" variant="h5">
            <b>About Me</b>
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <FormLabel component="legend">First Name*</FormLabel><br></br>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  helperText="(As per passport)"
                />
              </Grid>
              <Grid item xs={12}>
              <FormLabel component="legend">Last Name*</FormLabel><br></br>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  helperText="(As per passport)"
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
              <FormLabel component="legend">Date Of Birth*</FormLabel>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
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
                  id="lastName"
                  label="Passport Number"
                  name="lastName"
                  autoComplete="family-name"
                />
                <br></br>
              </Grid>
              <Grid item xs={12}>
              <FormLabel component="legend">Nationality:*</FormLabel><br></br>
              <Select
                    style={{ width: "150px" }}
                    value={selectedCountry}
                    
                    onChange={(e) => selectCountryHandler(e.target.value)}
                >
                    {!!countryArr?.length &&
                    countryArr.map(({ label, value }) => (
                        <MenuItem key={value} value={value}>
                        {label}
                        </MenuItem>
                    ))}
                </Select>
                <br></br>
              </Grid>
            </Grid>
            <Grid>
            <Button
              onClick={navigateToMInfo}
              type="submit"
              halfWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}  
            >
              Next
            </Button>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}