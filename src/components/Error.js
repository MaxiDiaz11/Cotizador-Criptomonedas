import React from "react";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  text-align: center;
  margin-top: 1.2rem;
  border-radius: 10px;
`;
const Parrafo = styled.p`
  font-weight: bold;
  font-size: 20px;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
`;
const Error = ({ mensaje }) => {
  return (
    <Contenedor className="container">
      <Parrafo className="lead">{mensaje}</Parrafo>
    </Contenedor>
  );
};

export default Error;
