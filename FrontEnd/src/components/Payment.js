import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Payments() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
        
    <center>
        
    <div>
        
        <h1> iuwihckdsjcahdshakdhkahdkhdskhdkshakhdbnbmb</h1>
      
    </div>
    </center>
    </ThemeProvider>
  );
}
