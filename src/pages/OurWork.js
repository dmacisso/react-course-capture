import React from 'react';
import styled from 'styled-components/';
import { Link } from 'react-router-dom';
//? Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

const OurWork = () => {
  return (
    <Work>
      <Movie>
        <h1>The Athlete</h1>
        <div className="line"></div>
        <Link>
          <img src={athlete} alt="Athlete" />
        </Link>
      </Movie>
      <Movie>
        <h1>The Racer</h1>
        <div className="line"></div>
        <Link>
          <img src={theracer} alt="The Racer" />
        </Link>
      </Movie>
      <Movie>
        <h1>Good Times</h1>
        <div className="line"></div>
        <Link>
          <img src={goodtimes} alt="Good Times" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 90%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
