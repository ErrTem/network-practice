import React, { Component } from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";


const App = (props) => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>         
            <Route path='/dialogs' element={<Dialogs store={props.store} state={props.state.dialogsPage} />} />
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}


export default App;
