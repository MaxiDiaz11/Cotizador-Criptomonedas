import React, { useEffect, useState } from "react";
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import axios from "axios";

const Formulario = () => {
  // inicializo las monedas a convertir
  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de EEUU" },
    { codigo: "EUR", nombre: "EURO" },
    { codigo: "AR", nombre: "Peso Argentino" },
    { codigo: "BRL", nombre: "Real" },
  ];
  //   state para el listado de criptomonedas
  const [listadoCripto, setlistadoCripto] = useState([]);

  // utilizo useMoneda
  const [moneda, SeleccionarMoneda] = useMoneda("", MONEDAS);

  //   utilizo useCriptomoneda
  const [cripto, SeleccionarCriptomoneda] = useCriptomoneda("", listadoCripto);

  //   llamado a la API
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta = await axios.get(url);
      setlistadoCripto(respuesta.data.Data);
      console.log(respuesta.data.Data);
    };
    consultarAPI();
  }, []);

  return (
    <div className="container">
      <form>
        <SeleccionarMoneda />
        <SeleccionarCriptomoneda />
      </form>
    </div>
  );
};

export default Formulario;
