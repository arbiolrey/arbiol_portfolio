import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/download.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Ma Clarissa Ericka Orcullo','Computer sciences']} speed={500} eraseDelay={500}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    