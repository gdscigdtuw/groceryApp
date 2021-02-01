import {
  Route,
  Link
} from 'react-router-dom';

  import logo from './logo.svg';
import './App.css';

import Home from './Home.js';
import Main from './Main.js';
import ContactUs from './ContactUs.js';
import Blog from './Blog.js';
import React from 'react';
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";


import Home from './components/Home';
import About from './components/About';
import Messages from './components/Messages';
function App() {
 
  return (

    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="menu">
      <ul>
<li> <Link to="/">Home</Link> </li>
<li> <Link to="/messages">Messages</Link> </li>
<li> <Link to="/about">About</Link> </li>
{/* <li>
    <a href="/messages">Messages (with a regular anchor element)</a> 
  </li> */}
</ul>
    </div>
    <div className="App-intro">
          <Route path="/" component={Home}/>
          <Route path="/messages" component={Messages}/>
          <Route path="/about" component={About}/>
        </div>
    </div>

  );
 }
export default App;
