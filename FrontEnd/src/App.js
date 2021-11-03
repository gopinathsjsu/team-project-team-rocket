import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignUp from './components/SignUp';
import ContactInfo from './components/ContactInfo';
import SignIn from './components/SignIn';
import Flightdetail from './components/Flightdetail';
import AppBar from './components/AppBar';
import './App.css';

function App() {

  console.log("Inside app")
  console.log("after signIn click")
  return (
    /*<div style={{
      backgroundImage: 'url("https://wallpaperaccess.com/full/1470792.jpg")',
      height: "100%", width: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment:"fixed", backgroundPosition:"center"
    }}>*/
    
    <>
        <Switch>
        <Route exact path='/Signup' component={SignUp} />
        <Route exact path='/Contactinfo' component={ContactInfo} />
        <Route path='/Signin' component={SignIn} />
        <Route exact path='/Flightdetail' component={Flightdetail} />
        <Route exact path='/' component={AppBar} />
        </Switch>
        <div  className="container"></div>
    </>
    /*</div>*/
    
  );
}

export default App;
