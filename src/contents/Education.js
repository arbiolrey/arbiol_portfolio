import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Computer Engineering" where="Nemsu-LC" from="Ausgust 23" to="Present"/>
            <Widecard title="HES | SNNHS" where="Senior and Secondary School" from="2011" to="2019"/>
            </div>
            )
        }
    }
    
export default Education
    