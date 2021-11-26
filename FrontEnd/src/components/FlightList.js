import React, { useState, useCallback } from 'react'
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid';
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
    field: 'action',
    headerName: 'Action',
    headerClassName: 'super-app-theme--header',
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        return history.push("/SelectSeat");
      };

      return <Button onClick={onClick}>CLICK</Button>;
    },
  },
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
    <div style={{ height: 200, width: '100%' }} className={classes.root}>
      <DataGrid rows={flightArr}
      getRowId={(row) => row._id} 
      columns={columns}

      />
      {/* <FormControl>
            <Button onClick={selected == null ? 'none' : navigateToSelectSeat} variant="contained">Select</Button>
            </FormControl> */}
    </div>
    </Box>
    </ThemeProvider>
  );
}
