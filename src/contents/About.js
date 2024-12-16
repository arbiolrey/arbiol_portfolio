import React, { Component } from 'react';
import picture from '../img/clarr.jpg';




class About extends Component {
    render() {
        return (
            <div className="condiv">
            <img src={picture} alt="Pic" className="picure"></img>
            <h2 className="subtopic">About Me</h2>
            <h4>Hey there,</h4>
            <h1>I'm Ma Clarissa  Ericka Orcullo </h1>
            <h3>Student <u>Nemsu-Lc</u> | FIGMA <u>Simple Creator</u></h3>
            <br></br>
            <p>I started my journey in  computers sciences from an young age,
            now I’m 19 years old, Pursuing my Degree in
            Nemsu North Estern mindanao State University 
            </p>
            
            </div>
            )
        }
    }
    
export default About
    