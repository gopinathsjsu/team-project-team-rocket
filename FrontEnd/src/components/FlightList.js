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
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'departure_time',
    headerName: 'Departure Time',
    type: 'time',
    headerClassName: 'super-app-theme--header',
    width: 200,
  },
  {
    field: 'origin',
    headerName: 'Origin',
    headerClassName: 'super-app-theme--header',
    width: 200,
  },
  {
    field: 'arrival_time',
    headerName: 'Arrival Time',
    headerClassName: 'super-app-theme--header',
    width: 200,
  },
  {
    field: 'destination',
    headerName: 'Destination',
    headerClassName: 'super-app-theme--header',
    width: 200,
  },
  {
    field: 'price',
    headerName: 'Price',
    headerClassName: 'super-app-theme--header',
    width: 100,
    
  },
  {
    field: 'departure_date',
    headerName: 'Departure Date',
    headerClassName: 'super-app-theme--header',
    width: 200,
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
  //if(getRowId>0){
    history.push("/SelectSeat");
  //}
}

const theme = createTheme();

export default function StylingHeaderGrid(props) {
  const classes = useStyles();
  let flightArr=props.flightList;
  //console.log("FlightArray = " + flightArr);

  return (
    
    <ThemeProvider theme={theme}>
      <Header/>
    <Box
      pt={15}
    >
    <div style={{ height: 200, width: '100%' }} className={classes.root}>
      <DataGrid rows={flightArr} getRowId={(row) => row._id} columns={columns}  />
      <FormControl>
            <Button onClick={navigateToSelectSeat} variant="contained">Select</Button>
            </FormControl>
    </div>
    </Box>
    </ThemeProvider>
  );
}
