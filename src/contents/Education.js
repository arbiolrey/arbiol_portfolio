import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Computer Science" where="Nemsu-LC" from="Ausgust 23" to="Present"/>
            <Widecard title="SES | SAHS" where="Senior and Secondary School" from="2009" to="2017"/>
            </div>
            )
        }
    }
    
export default Education
    