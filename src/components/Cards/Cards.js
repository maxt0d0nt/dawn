import React from "react";
import "./Card.css";

const Cards = () => {
  return (
    <>
      <div className="card-container">
        <div className="meet">
          <div className="meetTitle">
            <h2>CONOCE LO QUE HACEMOS</h2>
          </div>
          <div className="meetSubTitle">
            <p>
              Conooce lo que podemos hacer por ti y tu negocio, diseñamos tu
              pagina web, analizamos tus datos y te ayudamos a enfocarte en
              objetivos especifios
            </p>
          </div>
          <div className="meetDescription">
            <p>
              Diseñamos tu aplicacion o pagina web basandonos en los datos de
              tus clientes actuales y de potenciales futuros clientes bajo las
              mejores convenciones del diseño UX/UI
            </p>
            <p>
              Cantactanos y cuentanos tus ideas y si no sabes como avanzar
              nosotros te ayudamos a avanzar en tus proyectos.
            </p>
            <p className="lema">
              Por que todo negocio necesita de un brillante y nuevo amanecer
            </p>
          </div>
        </div>
        <div className="card">
          <p>
            <span>DISENO UX/UI</span>
          </p>
          <p>
            <span>DESINO WEB</span>
          </p>
          <p>
            <span>DATA ANALISIS</span>
          </p>
          <p>
            <span>MARKETIN DIGITAL</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Cards;
