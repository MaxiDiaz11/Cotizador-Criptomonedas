import React from "react";
import imagen from "./cryptomonedas.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";

const Imagen = styled.img`
  height: 500px;
  width: 500px;
  margin-bottom: 20px;
  @media (max-width: 992px) {
    height: 300px;
    width: 300px;
  }
`;

function App() {
  return (
    <div className="container mt-5 text-center">
      <Header mensaje="Cotizador Criptomonedas" />
      <div className="row">
        <div className="col col-sm-12 col-md-6 col-lg-6">
          <Imagen src={imagen} alt="imagen criptomonedas" />
        </div>
        <div className="col col col-12 col-md-6">
          <Formulario />
        </div>
      </div>
    </div>
  );
}

export default App;
