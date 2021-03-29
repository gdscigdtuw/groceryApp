import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Main from './Main.js';
import ContactUs from './ContactUs.js';
import Blog from './Blog.js';
import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" ><Home /></Route>
            <Route path="/main" ><Main /></Route>
            <Route path="/contactus" ><ContactUs /></Route>
            <Route path="/blog" ><Blog /></Route>
          </Switch>
          <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
