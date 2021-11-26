import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Stack from '@mui/material/Stack';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import history from "../helpers/history";
import FlightList from "./FlightList";
import axios from 'axios';

/*import './Flightdetail.css';*/

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
};

export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [datePickerValue, handleDateChange] = React.useState(new Date());
  const [dateValue, setDateValue] = React.useState('');
  const [tripType, setTripType] = React.useState("oneWay")
  const [select, setSelect] = React.useState('');

  const [origin, setOrigin] = React.useState('');
  const [destination, setDestination] = React.useState('');
  const [loadFlightList, setLoadFlightCompo] = React.useState(false);
  const [flightList, setFlightList] = React.useState([]);

  const handleChange1 = (event) => {
    setSelect(event.target.value);
  };
  // console.log("Floating action button ",AdapterDateFns())

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const onTripTypeSelect = (e) => {
    console.log("printing type", e.target.value)
    setTripType(e.target.value)
  }

  const navigateToFlightlist = async () => {
    var month = datePickerValue.getMonth() + 1;
    var day = datePickerValue.getDate();
    var year = datePickerValue.getFullYear();
    if (day.toString().length < 2) 
        day = '0' + day.toString();
    if (month.toString().length < 2) 
        month = '0' + month.toString();
    const departureDate = year.toString() + month.toString()  + day.toString();
    console.log(departureDate);
    if (origin && destination) {
      let response = await axios.get("http://localhost:8080/flights?origin=" + origin + "&destination=" + destination + "&departure_date=" + departureDate);
      console.log("response= ", response)
      setFlightList(response.data);
      setLoadFlightCompo(true)
    }
    else {
      console.log("Enter all the important");
    }
    history.push("/Flightlist");
  }

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'primary',
      sx: fabStyle,
      icon: <AddIcon />,
      label: 'Add',
    },
    {
      color: 'secondary',
      sx: fabStyle,
      icon: <EditIcon />,
      label: 'Edit',
    },
    {
      color: 'inherit',
      sx: { ...fabStyle, ...fabGreenStyle },
      icon: <UpIcon />,
      label: 'Expand',
    },
  ];

  if (!loadFlightList) {
    return (
      <Box pt={25} pl={10}>
        <Box
          sx={{
            bgcolor: 'background.paper',
            width: 500,
            position: 'relative',
            minHeight: 200,
          }}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="action tabs example"
            >
              <Tab label="Book" {...a11yProps(0)} />
              <Tab label="Check-in" {...a11yProps(1)} />
              <Tab label="My trips" {...a11yProps(2)} />
            </Tabs>
          
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <FormControl component="fieldset">
                <FormLabel style={{ fontWeight: 600 }} component="legend">Flight</FormLabel>
                <br></br>
                <RadioGroup onChange={onTripTypeSelect} defaultValue="oneWay" row aria-label="gender" name="row-radio-buttons-group">
                  <FormControlLabel value="twoWay" control={<Radio />} label="Roundtrip" />
                  <FormControlLabel value="oneWay" control={<Radio />} label="One-way" />
                </RadioGroup>

                <div>
                  <TextField id="standard-basic" onChange={(e) => { setOrigin(e.target.value) }} label="From*" variant="standard" />
                  &nbsp;&nbsp;&nbsp;
                  <TextField id="standard-basic" onChange={(e) => { setDestination(e.target.value) }} label="To*" variant="standard" />
                </div>
              </FormControl>
              <br></br><br></br>

              <FormControl>
                <FormLabel component="legend">Date</FormLabel>
                <br/>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    {tripType == "twoWay" ?
                      <DesktopDateRangePicker
                        startText="Start Date"
                        value={dateValue}
                        onChange={(newValue) => {
                          setDateValue(newValue);
                        }}
                        renderInput={(startProps, endProps) => (
                          <React.Fragment>
                            <TextField {...startProps} />
                            <Box sx={{ mx: 2 }}> to </Box>
                            <TextField {...endProps} />
                          </React.Fragment>
                        )}
                      />
                      :
                      <DesktopDatePicker
                        inputFormat="MM/dd/yyyy"
                        value={datePickerValue}
                        onChange={handleDateChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    }
                  </Stack>
                </LocalizationProvider>
              </FormControl>
              <br></br><br></br>

              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Cabin Class</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={select}
                  onChange={handleChange1}
                  label="select"
                >

                  <MenuItem value={10}>Economy</MenuItem>

                  <MenuItem value={20}>Business or First class</MenuItem>
                </Select>
              </FormControl>
              <br></br><br></br>

              <FormControl>
                <Button onClick={async () => { await navigateToFlightlist() }} variant="contained">Find Flights</Button>
              </FormControl>

            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <FormLabel style={{ fontWeight: 600 }} component="legend" className="text-field-custom">Check-in</FormLabel> <br></br>
              <TextField style={{ width: '100%' }} id="standard-basic" label="Confirmation Number*" variant="standard" />
              <br></br><br></br>
              <TextField style={{ width: '100%' }} id="standard-basic" label="Last Name*" variant="standard" />
              <br></br><br></br><br></br>

              <FormControl>
                <Button variant="contained">Search</Button>
              </FormControl>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <FormLabel style={{ fontWeight: 600 }} component="legend" className="text-field-custom">My Trips</FormLabel> <br></br>
              <TextField style={{ width: '100%' }} id="standard-basic" label="Confirmation Number*" variant="standard" />
              <br></br><br></br>
              <TextField style={{ width: '100%' }} id="standard-basic" label="Last Name*" variant="standard" />
              <br></br><br></br><br></br>

              <FormControl>
                <Button variant="contained">Search</Button>
              </FormControl>
            </TabPanel>
          </SwipeableViews>

        </Box>
        <div style={{
          backgroundImage: 'url("https://free4kwallpapers.com/uploads/originals/2020/05/31/-beautiful-sunset-with-a-rocket-wallpaper.png")',
          height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center"
        }}></div>
      </Box>
    );
  }
  else {
    return (<FlightList flightList={flightList} />)
  }
}