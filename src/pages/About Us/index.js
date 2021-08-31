import React, { Component } from 'react';
import "./About.scss"

class About extends Component {
    render() {
        return (
            <div className="About_Us">
                <div className="details">
                    <h1> hello this is Poonam Tailers </h1>
                    <h3> Contact us : 9924437044 </h3>
                    <a href="https://www.instagram.com/kruti_2.1/" className="link">Instgram</a>
                    <a href="https://pin.it/3xgp4sv" className="link">Pinrest</a>
                    <br />
                    <p>copy right © poonam tailers since 2020-21</p>

                </div>
            </div>
        );
    }
}

export default About;