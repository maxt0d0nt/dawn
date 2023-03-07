import React from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import DawnBalls from "../../desingComponents/dawnBalls/DawnBalls";

const About = () => {
  AOS.init({
    delay: 200,
    duration: 2000,
  });

  return (
    <>
      <div className="about-container" id="about">
        <div className="about-left" data-aos="fade-up">
          <h2>¿QUIENES SOMOS?</h2>
          <p>
            Somo un grupo de diseñadores y desarrolladores que hemos decidido
            crear un sitio donde aplicar nuestros conociemientos en el campo del
            diseño web y el marketing para ayudar a tu empresa a dar el
            siguiente paso
          </p>
          <div className="about-btn">
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">+ INFO</span>
            </button>
          </div>
        </div>
        <div className="about-rigth" data-aos="fade-left">
          <div className="about-description">
            <p>
              DAWN cuenta con un grupo humano que te ayudara a potenciar tu
              negocio y dar un siguiente paso en un mundo cada vez mas
              competitivo.
            </p>
            <p>
              Diseñamos tu pagina web con lo mas actualizado del mercado en
              cuanto a diseño grafico y tegnologia web. Analisamos los datos de
              tus negocio para llevarte a mejorar y enfocarte en objetivos
              concretos
            </p>
            <p>
              Desarrolamos tus componentes a traves de estudios UX/UI para que
              todo tus componentes se adapten a tus clientes. Realizamos tus
              campañas de marketing digital para darte visualizacion y posicion
              en el mercado
            </p>
          </div>
          <div className="ala">
          <DawnBalls />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
