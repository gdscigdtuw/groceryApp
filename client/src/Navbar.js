import React, {useState} from 'react';
import {Link}from "react-router-dom";
import {Container} from "react-bootstrap"
import logo from "./logo192.png"
function NavbarSection(){
  const mystyle = {
      color: "white",
      paddingTop: "30px",
      paddingBottom: "21px",
      paddingLeft: "70px",
      paddingRight: "70px",
      fontFamily: "Arial",
      lineHeight: "60px",
      textDecoration: "none"
    };

    const divStyle= {
      backgroundColor: "#bedbbb",
      height: "60px",
      fontSize: "16px"
    }

    const image = {
      width: "30px",
      height: "30px",
      marginTop: "10px",
      marginBottom: "0px",
      paddingTop: "0px",
      paddingRight: "80px"
    }

    function changeBackground(e){
      e.target.style.backgroundColor= "#99b898";
    }

    function changeBackground2(e){
      e.target.style.backgroundColor= "#bedbbb";
    }

  return(
    <div style={divStyle}>
    <Container>
    <img src={logo} style={image}/>
      <Link to="/" style={mystyle} onMouseEnter={changeBackground} onMouseLeave={changeBackground2}>Home</Link>
      <Link to="/main" style={mystyle} onMouseEnter={changeBackground} onMouseLeave={changeBackground2}>Main</Link>
      <Link to="/contactus" style={mystyle} onMouseEnter={changeBackground} onMouseLeave={changeBackground2}>Contact Us</Link>
      <Link to="/blog" style={mystyle} onMouseEnter={changeBackground} onMouseLeave={changeBackground2}>Blog</Link>
    </Container>
    </div>
  )
}

export default NavbarSection;
