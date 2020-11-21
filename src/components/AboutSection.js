import React from 'react';
import home1 from '../img/home1.png';
//? styled
// import styled from 'styled-components';
import { About, Description, Image, Hide } from '../styles';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide className="hide">
            <h2>We work to make</h2>
          </Hide>
          <Hide className="hide">
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>
          <Hide className="hide">
            <h2>come true.</h2>
          </Hide>
        </div>
        <p>
          Contact our skilled professionals for any photography or videography
          ideas that you have
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="Photographer with Camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
