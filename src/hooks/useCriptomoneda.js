import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  padding: 1rem;
  font-size: 30px;
  color: white;
  font-family: "Chakra Petch", sans-serif;
  margin-top: 10px;
`;
const Select = styled.select`
  padding: 1rem;
  --webkit-appearance: none;
  border-radius: 8px;
  width: 100%auto;
`;
const Contenedor = styled.div`
  @media (max-width: 992px) {
    margin-bottom: 40px;
  }
`;

const useCriptomoneda = (stateInicial, opciones) => {
  const [state, setState] = useState(stateInicial);

  const SeleccionarCriptomoneda = () => (
    <Fragment>
      <Contenedor>
        <Label>Seleccione su Criptomoneda</Label>
        <div className="form-floating">
          <Select
            className="form-select"
            value={state}
            aria-label="Criptomoneda"
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">Seleccione una opcion</option>
            {opciones.map((opcion) => (
              <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>
                {opcion.CoinInfo.FullName}
              </option>
            ))}
          </Select>
          <label htmlFor="floatingSelect">Criptomoneda</label>
        </div>
      </Contenedor>
    </Fragment>
  );

  return [state, SeleccionarCriptomoneda, setState];
};

export default useCriptomoneda;
