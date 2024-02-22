import React from 'react';
import HomeScreen from './Home';
import "../assets/css/menu.css";
import "../assets/css/About.css";
import aboutimg from "../assets/images/aboutimg.svg";

const About = () => {
  return (
    <div className='abt'>
      <div className='na'>
        <HomeScreen />
      </div>
      <div className='bo'>
        <h1><u>The Initiative</u></h1>
        <br />
        <div className="content-container">
          <div className="text-left">
            <p>psbloansin59minutes.com is a new-age digital lending platform. the platform has been developed with an
              objective to provide advanced technology-based financial innovations and solutions psb59 platform was born
              from the insight that MSMEs found it hard to avail loans from formal banking channels due to the tedious application,
              documentation and verification processes.<br /><br />powered by rigorous innovation and technological advancements,
              we’re proud to be recognized as india’s largest lending platform (by credit suisse in march 2019).<br /><br />we passionately
              serve our customers with cutting-edge financial products and strive to help them pursue their dreams. the platform
              integrates advanced technologies like AI and ML to automate and digitize the lending processes for borrowers and
              lenders.<br /><br />speed and simplicity of availing loans have perennially been pain points for the indian borrower.
              this is where our platform makes the lives of any borrower easy and smooth.
            </p>
          </div>
          <div className="right-image">
            <img src={aboutimg} alt="Description of the image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
