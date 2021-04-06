import React from 'react';
import image from "./blogfeature.jpg"
import {Container, Form, Col, Button, Card, Row, Image} from "react-bootstrap"
import {Parallax} from "react-parallax"
<script src="https://kit.fontawesome.com/48be7fc2f2.js" crossorigin="anonymous"></script>
function Features(){
  
  const imageStyle = {
  
  }

  const h1Style = {
    position: "absolute",
    top : "300px",
    left : "100px",
    zIndex: "2",
    fontFamily: "Times New Roman",
    color: "#99b898",
  }

  const formDiv = {
    top: "100px",
    left: "25%",
    width: "70%",
    margin: "0 auto",
    height: 500
  }

  const iconStyle = {
    width: "80px",
    height: "80px",
    padding: "10px"
  }
  return( <div style={{backgroundColor:"#99b898"}}><h1 style={{padding:"80px",fontSize:"700%",color:"#d2f5e3",fontFamily:"Times New Roman"}}>Features</h1>
    <div  class="container-fluid">

    <div style={{padding:"50px"}} class="row">
    <div class="feature-box col-lg-4">
      <img style={{borderRadius:"100%"}} src="https://thetecsite.com/uploads/images/2020/04/image_750x_5e95f379a4c80.jpg" width="400" height="400" ></img>
        <h3 style={{color:"#d2f5e3",padding:"25px"}}>Choosing your way</h3>
        <p style={{color:"#184d47"}}> We compare prices and quality of grocery items from top e-commerce grocery sites.</p>
      </div>

      <div class="feature-box col-lg-4">
      <img style={{borderRadius:"100%"}} src="https://miro.medium.com/max/1200/0*Bm5_HKvoUV3NiExn" width="400" height="400" ></img>
        <h3 style={{color:"#d2f5e3",padding:"25px"}}>Chatbot</h3>
        <p style={{color:"#184d47"}}>Any queries? Feel free to ask.</p>
      </div>

      <div class="feature-box col-lg-4">
      <img style={{borderRadius:"100%"}} src="https://www.afamilyfeast.com/wp-content/uploads/2021/02/Supermarket-Shopping-101-Collage.jpg" width="400" height="400" ></img>
        <h3 style={{color:"#d2f5e3",padding:"25px"}}>Blog</h3>
        <p style={{color:"#184d47"}}>We provide you with the information which will make your life easier.</p>
      </div>

    </div>
    </div>

  </div>
  )
  
}

export default Features;
