import React from 'react';
import RapOne from '../images/rap-1.jpg';
import RapTwo from '../images/rap-2.jpg';

const Page = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="Info">
          <div className="CenterInfo">
              <h2>Welcome to</h2>
              <h2>Introduction</h2>
              <h1>HIPHOP</h1>
              <h2>+</h2>
              <h1>Culture</h1>
              <p>
                Hip-hop, cultural movement that attained widespread popularity in the 1980s
                and ’90s; also, the backing music for rap, the musical style incorporating
                rhythmic and/or rhyming speech that became the movement’s most lasting and
                influential art form.
              </p>
              <button>Get Started</button>
          </div>
        </div>
        <div className="Images">
          <div className="Colum1">
            <img src={RapOne} alt="rapper"/>
          </div>
          <div className="Colum2">
            <img src={RapTwo} alt="stage"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
