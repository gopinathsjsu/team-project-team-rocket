/*global WebviewSdk */
import React, { useState } from "react";
import SeatRow from "./SeatRow";
import "./styles.css";
import history from "../helpers/history";
import Header from './Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const seatMap = {};
for (let i = 1; i <= 10; i++) {
  ["A", "B", "C"].forEach((letter) => {
    if (seatMap[i]) {
      seatMap[i][letter] = Math.random() < 0.3;
    } else {
      seatMap[i] = { [letter]: Math.random() < 0.3 };
    }
  });
}

const navigateToBack=()=>{
  console.log("On navigate button click assasasa");
  history.push("/FlightList");
}

const theme = createTheme();

async function submitToAda(selectedSeat) {
  if (!window.location.search) {
    return;
  }

  const searchParams = new URLSearchParams(window.location.search);
  const app_user_id = searchParams.get("app_user_id");
  const conversation_id = searchParams.get("conversation_id");
  const full_channel_name = searchParams.get("full_channel_name");

  let apiURL = `${searchParams.get(
    "app_fqd"
  )}/api/message/sunshine/conversation_extension/`;

  if (searchParams.get("app_fqd").includes("localhost")) {
    apiURL = `https://test.rinoc.ngrok.io/message/sunshine/conversation_extension/`;
  }

  await fetch(apiURL, {
    method: "POST",
    body: JSON.stringify({
      payload: selectedSeat,
      app_user_id,
      conversation_id,
      full_channel_name
    })
  });
}

export default function App(props) {
  const [selectedSeat, setSelectedSeat] = useState(null);
  let flightArr=props.flightList;

  return (
    <ThemeProvider theme={theme}>  
    <div className="App">  
      <div className="plane-map-header">
      <Header/>
        {/* <h1>San Francisco (SFO) to Mumbai (BOM)</h1> */}
        <h1>{flightArr.origin}</h1>
        <h2>Select your preferred seat</h2>
      </div>
      <div className="plane">
        <div className="cockpit" />
        <div className="exit exit--front fuselage" />
        {Object.keys(seatMap).map((rowNum) => (
          <SeatRow
            key={rowNum}
            rowNum={rowNum}
            rowMap={seatMap[rowNum]}
            setSelectedSeat={setSelectedSeat}
            selectedSeat={selectedSeat}
          />
        ))}
      </div>
      <div className="plane-map-footer">
        <button
          className="button back"
          onClick={navigateToBack}
          variant="contained">
          Back
        </button>
        <button
          className="button confirm"
          id="confirm-button"
          disabled={!selectedSeat}
          onClick={async () => {
            if(!JSON.parse(localStorage.getItem("authenticated")))
            {
              history.push("/SignIn")
            }
            else
            {
            await submitToAda(selectedSeat);
            console.log("attempting to close.");
            console.log(window)
            // window.WebviewSdk.close(
            //   () => console.log("close success!"),
            //   (e) => console.log("close failure", e)
            // );
            }
          }}
        >
          <div className="lds-dual-ring" />
          Confirm
          <span id="seat-number" />
        </button>
      </div>
    </div>
    </ThemeProvider>
  );
}
