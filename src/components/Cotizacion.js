import React from "react";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  background-color: #fff;
  border: 3px solid white;
  text-align: center;
  color: black;
  font-family: "Chakra Petch", sans-serif;
  font-size: 1.4rem;
  width: 90%;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 20px;
  font-weight: bold;
  @media (max-width: 992px) {
    margin-bottom: 30px;
  }
`;

const Cotizacion = ({ respuesta }) => {
  if (Object.keys(respuesta).length === 0) return null;

  return (
    <Contenedor className="container">
      <p>El precio es: {respuesta.PRICE}</p>
      <p>El precio mas alto del dia es: {respuesta.HIGHDAY}</p>
      <p>El precio mas bajo del dia es: {respuesta.LOWDAY}</p>
      <p>Variacion ultimas 24hs: {respuesta.CHANGEPCT24HOUR}</p>
    </Contenedor>
  );
};

export default Cotizacion;
