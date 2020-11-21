import React from 'react';
import home1 from '../img/home1.png';
//? styled
import styled from 'styled-components';

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

//? Styled Components
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fff;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
