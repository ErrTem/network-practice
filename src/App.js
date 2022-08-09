import React, { Component } from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Navbar from './components/Dialogs/Navbar/Navbar'
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";


const App = (props) => {
  return (
    <Router>
      <div className='appWrapper'>
        <Header />
        <Navbar />
        <div className='appWrapperContent'>
          <Routes>
            <Route path='/profile' element={<Profile state={props.state.profilePage} />} />
            <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage} />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}


export default App;
