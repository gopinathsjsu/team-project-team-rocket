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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
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
import Header from './Header';



const theme = createTheme();

export default function SignUp() {

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

  const [value, setValue] = React.useState('Controlled');

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




    
  const [value1, setValue1] = React.useState(null);

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
        
          <Typography component="h1" variant="h5">
            <b>Member Contact Information</b>
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <FormLabel component="legend">Select Country*</FormLabel>
                <div>
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
                </div>
              </Grid>
              
              
              <Grid item xs={12}>
              <FormLabel component="legend">Address*</FormLabel>
              <TextField fullWidth sx={{ m: 0 }}
                id="outlined-multiline-flexible"
                label="Address"
                multiline
                maxRows={4}
                value={value1}
                onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
              <FormLabel component="legend">City*</FormLabel>
              <TextField fullWidth sx={{ m: 0 }}
                id="outlined-multiline-flexible"
                label="Address"
                multiline
                maxRows={4}
                value={value1}
                onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
              <FormLabel component="legend">State*</FormLabel>
              <TextField fullWidth sx={{ m: 0 }}
                id="outlined-multiline-flexible"
                label="Address"
                multiline
                maxRows={4}
                value={value1}
                onChange={handleChange}
                />
              </Grid>
  
              <Grid item xs={12}>
              <FormLabel component="legend">Zip Code*</FormLabel>
              <TextField fullWidth sx={{ m: 0 }}
                id="outlined-multiline-flexible"
                label="Address"
                multiline
                maxRows={4}
                value={value1}
                onChange={handleChange}
                />
              </Grid>           
                        
              <Grid item xs={12}>
              <InputLabel htmlFor="standard-adornment-password">Email*</InputLabel>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
              <InputLabel htmlFor="standard-adornment-password">Password*</InputLabel>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange1('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Next
            </Button>
            
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}