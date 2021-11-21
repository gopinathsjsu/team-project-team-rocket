import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import history from "../helpers/history";
import Header from './Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const columns = [
  {
    field: 'origin',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    width: 300,
  },
  {
    field: 'destination',
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
    field: 'departure_date',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    width: 300,
  },
];


    /*flightArr = axios.get('local:8080/flight/')
    let flightArr=[{id:1, departure:"United ",arrival:"Mumbai",price:"1000 $", date:"10-11-2021"},
    {id:2, departure:"United ",arrival:"Mumbai",price:"1000 $", date:"10-11-2021"},
  ];

  componentDidMount() {
    axios.get('http://localhost:8080/flight')
        .then(res => {
            this.setState({ usersCollection: res.data });
        })
        .catch(function (error) {
            console.log(error);
        })
}*/

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

export default function StylingHeaderGrid(props) {
  const classes = useStyles();
  let flightArr=props.flightList;

  return (
    
    <ThemeProvider theme={theme}>
      <Header/>
    <Box
      pt={15}
    >
    <div style={{ height: 300, width: '100%' }} className={classes.root}>
      <DataGrid rows={flightArr} getRowId={(row) => row._id} columns={columns}  />
      <FormControl>
            <Button onClick={navigateToSelectSeat} variant="contained">Select</Button>
            </FormControl>
    </div>
    </Box>
    </ThemeProvider>
  );
}
