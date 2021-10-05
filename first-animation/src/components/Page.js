import React, {useEffect} from 'react';
import RapOne from '../images/rap-1.jpg';
import RapTwo from '../images/rap-2.jpg';
import './Style.css';
import {gsap, Power3, Elastic} from 'gsap';

//Con from vamos de un estilo nuevo, al estilo original css
//Con to vamos del estilo css al estilo nuevo


const Page = () => {

 const timeLine = gsap.timeline({
     defaults:{
         opacity:0,
         y:50,
         duration:1,
         //ease: Elastic.easeOut.config(1,0.3)
         ease: Power3.easeOut
     }
 });

 useEffect(() =>{
     const titulo = document.querySelectorAll('.Titulo');
     const titulo2 = document.querySelectorAll('.Titulo2');
     timeLine.from(titulo,{
        x:50,
        stagger:0.3,
     })
     
     timeLine.from(titulo2,{
        x:-50,
        stagger:0.3
     }, "-=1.3") //Offset

 },[])

  return (
    <div className="Container">
        <div className="Wrapper">
              <div className="Info">
                  <div className="CenterInfo">
                      <h2 className="Titulo">Welcome to</h2>
                      <h2 className="Titulo2">the guetto</h2>
                      <h1 className="Titulo">HIPHOP</h1>
                      <h2 className="Titulo2">+</h2>
                      <h1 className="Titulo2">Culture</h1>
                      <p className="Titulo">
                          Hip-hop, cultural movement that attained widespread popularity in the 1980s
                          and ’90s; also, the backing music for rap, the musical style incorporating
                          rhythmic and/or rhyming speech that became the movement’s most lasting and
                          influential art form.                        
                      </p>
                      <button className="Titulo2">Get Started</button>
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
