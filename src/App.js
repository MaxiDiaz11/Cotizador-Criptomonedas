import React, { useState, useEffect } from "react";
import imagen from "./cryptomonedas.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Cotizacion from "./components/Cotizacion";
import axios from "axios";
import Spinner from "./components/Spinner";

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
  const [moneda, setMoneda] = useState("");
  const [criptomoneda, setCriptoMoneda] = useState("");
  const [respuesta, setRespuesta] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const llamadaAPI = async () => {
      if (moneda !== "" && criptomoneda !== "") {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=${moneda},${criptomoneda}`;
        const respuesta = await axios.get(url);
        setCargando(true);
        setTimeout(() => {
          setCargando(false);
          setRespuesta(respuesta.data.DISPLAY[criptomoneda][moneda]);
        }, 3000);
      }
    };
    llamadaAPI();
  }, [criptomoneda, moneda]);

  return (
    <div className="container mt-5 text-center">
      <Header mensaje="Cotizador Criptomonedas" />
      <hr />
      <div className="row">
        <div className="col col-sm-12 col-md-6 col-lg-6">
          <Imagen src={imagen} alt="imagen criptomonedas" />
        </div>
        <div className="col col-sm-12 col-md-6 col-lg-6">
          <Formulario setMoneda={setMoneda} setCriptoMoneda={setCriptoMoneda} />
          {cargando ? <Spinner /> : <Cotizacion respuesta={respuesta} />}
        </div>
      </div>
    </div>
  );
}

export default App;
