import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import history from "../helpers/history";
import Header from './Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const columns = [
  {
    field: 'departure',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    width: 300,
  },
  {
    field: 'arrival',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    width: 300,
  },
  {
    field: 'price',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    width: 300,
    
  },
  {
    field: 'date',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    width: 300,
  },
];


    let flightArr=[{id:1, departure:"United ",arrival:"Mumbai",price:"1000 $", date:"10-11-2021"}];

const useStyles = makeStyles({
  root: {
    '& .super-app-theme--header': {
      backgroundColor: '#1976d2',
      color: 'white',
      fontsize: '80px'
    },
  },
});

const navigateToSelectSeat=()=>{
  console.log("On navigate button click assasasa");
  history.push("/SelectSeat");
}

const theme = createTheme();

export default function StylingHeaderGrid() {
  const classes = useStyles();

  return (
    
    <ThemeProvider theme={theme}>
      <Header/>
    <Box
      pt={15}
    >
    <div style={{ height: 300, width: '100%' }} className={classes.root}>
      <DataGrid rows={flightArr} columns={columns}  />
      <FormControl>
            <Button onClick={navigateToSelectSeat} variant="contained">Select</Button>
            </FormControl>
    </div>
    </Box>
    </ThemeProvider>
  );
}
