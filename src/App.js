import React, {Component} from "react";
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
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
        <Routes>
          <Route path='/' element={<Profile posts={props.state.posts} />}/>
          <Route path="/dialogs/" element={<Dialogs dialogs={props.state.dialogs} messages={props.state.messages} />} />
          {/* <Route path='/dialogs' element={<Dialogs {...props} />} />
          <Route path='/profile' element={<Profile {...props}/>} /> */}
          {/* <Route path='/dialogs' render={()=> <Dialogs dialogs={props.dialogs}} */}
          </Routes>
        </div>
      </div>
    </Router>
  )
}


export default App;
