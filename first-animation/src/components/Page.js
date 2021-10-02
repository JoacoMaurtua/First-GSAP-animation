import React from 'react';
import RapOne from '../images/rap-1.jpg';
import RapTwo from '../images/rap-2.jpg';
import './Style.css';

const Page = () => {
  return (
    <div className="Container">
        <div className="Wrapper">
              <div className="Info">
                  <div className="CenterInfo">
                      <h2>Welcome to</h2>
                      <h2>introducción</h2>
                      <h1>HIPHOP</h1>
                      <h2>+</h2>
                      <h1>Culture</h1>
                      <p>
                          Hip-hop, cultural movement that attained widespread popularity in the 1980s
                          and ’90s; also, the backing music for rap, the musical style incorporating
                          rhythmic and/or rhyming speech that became the movement’s most lasting and
                          influential art form.                        
                      </p>
                      <button>Animación Inversa</button>
                  </div>
              </div>
              <div className="Imagenes">
                  <div className="Colum1">
                      <img src={RapOne} alt="Rapper" />
                  </div>
                  <div className="Colum2">
                      <img src={RapTwo} alt="Stage" />
                  </div>
              </div>
          </div>
      </div>
    
  );
}

export default Page;
