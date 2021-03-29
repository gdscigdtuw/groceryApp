import React, {useState} from 'react';
import {Link}from "react-router-dom";
import logo from "./logo192.png"
function Footer(){
  const mystyle = {
      color: "white",
      paddingTop: "25px",
      paddingRight: "50px",
      fontFamily: "Arial",
      textDecoration: "none",
      display: "inline-block"
    };

    const divStyle= {
      backgroundColor: "#bedbbb",
      height: "60px",
      fontSize: "12px",
      textAlign: "right",
      position: "absolute",
      width: "100%",
      fixed: "bottom"
    }

  return(
    <div style={divStyle}>
      <Link to="/contactus" style={mystyle}>Contact Us</Link>
      <Link to="/blog" style={mystyle}>Blog</Link>
    </div>
  )
}

export default Footer;
