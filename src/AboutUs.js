import React, { useEffect, useState } from "react";
import {Carousel} from "react-bootstrap";

function AboutUs(){   
  const h1Style = {
    
    fontFamily: "Times New Roman",
    color: "#e5c5b5",
  }
    
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);};
    return(<div style={{padding:"100px",backgroundColor:"#e84a5f"}}><h1 style={{padding:"80px",fontSize:"700%",color:"#f4d9c6",fontFamily:"Times New Roman"}}>About Us</h1>
    
    
   
    
    
  
  <Carousel style={{
  marginLeft: "auto",
  marginRight: "auto",
  width: "85%"}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://th.bing.com/th/id/OIP.tDdkFI5x1t0ePgO7uqpbZgHaEq?pid=ImgDet&rs=1"  alt="First slide" width="100" height="500"  margin= "100px"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://mindster.com/wp-content/uploads/2021/01/grocery-delivery-app.jpg"    alt="Second slide" width="100" height="500"  margin= "100px"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://th.bing.com/th/id/OIP.pHMV61Y4FlgmKDGHleXTdQHaE8?w=267&h=180&c=7&o=5&dpr=1.25&pid=1.7"  alt="Third slide" width="100" height="500"  margin= "100px"
    />

    <Carousel.Caption>
      <h3>Increase in number of grocery apps on monthly basis</h3>
      <p>No time to track ratings and prices? No worries, we are here to help!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


</div>)}
export default AboutUs;
