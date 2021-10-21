import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Flightdetail from './components/Flightdetail';
import AppBar from './components/AppBar';
import './App.css';

function App() {

  <div
      style={{
         backgroundImage: `url("https://www.nicesnippets.com/image/imgpsh_fullsize.png")`,backgroundRepeat: 'no-repeat',width:'250px',height:'250px',color:'white'
      }}>
        Nice Snippets
  </div>

  console.log("Inside app")
  console.log("after signIn click")
  return (
    <>
        <Switch>
        <Route exact path='/SignUp' component={SignUp} />
        <Route path='/SignIn' component={SignIn} />
        <Route exact path='/Flightdetail' component={Flightdetail} />
        <Route exact path='/' component={AppBar} />
        </Switch>
        <div  className="container"></div>
    </>
  );
}

export default App;
