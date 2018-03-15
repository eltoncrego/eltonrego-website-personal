import React, { Component } from 'react';
import './Landing.css';
import './index.css';
import logo from './assets//svg/logo/light.svg'

class Landing extends Component {
  render() {
    return(
      <div class="landing">
        <div class="navbar">
          <img src={logo} class="site-logo"></img>
        </div>
        <div class="content">
          <p class="light-display2">Welcome,</p>
          <p class="light-title-secondary">My name is Elton Christopher Rego.
            I am a Front-End Software Engineer, Digital Designer, and Entrepreneur.
            You can find out more about my background, experience, and goals here.</p>
        </div>
      </div>
    );
  }
}

export default Landing;
