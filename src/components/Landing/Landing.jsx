import React from 'react'
import './Landing.css'
import { Bounce, Fade, Slide, Zoom } from "react-awesome-reveal";
import Landingimage from '../../Images/Landingimage.jpg'

const Landing = () => {
  return (
    <>
    <div className="landing">
   
        <div className="landing-heading">
        <Slide cascade direction={"right"}>
          <h1>The Funday Bite</h1>
          </Slide>
          <Slide cascade direction={"left"}>
          <p>Delicous Food For Every Mood</p>
          </Slide>
        </div>
        
        <Fade direction='top'>
        <div className="landing-image">
            <img src={Landingimage} alt="" />
        </div>
        </Fade>
    </div>
    </>
  )
}

export default Landing