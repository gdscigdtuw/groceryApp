import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Main from './Main.js';
import ContactUs from './ContactUs.js';
import Blog from './Blog.js';
import React from 'react';
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/main">Main</Link>
        <Link to="/contactus">Contact Us</Link>
        <Link to="/blog">Blog</Link>

          <Switch>
            <Route exact path="/" ><Home /></Route>
            <Route path="/main" ><Main /></Route>
            <Route path="/contactus" ><ContactUs /></Route>
            <Route path="/blog" ><Blog /></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
