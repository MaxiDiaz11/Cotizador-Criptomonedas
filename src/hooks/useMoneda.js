import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Label = styled.label`
  padding: 1rem;
  font-size: 30px;
  color: white;
  font-family: "Chakra Petch", sans-serif;
`;
const Select = styled.select`
  padding: 1rem;
  --webkit-appearance: none;
  border-radius: 8px;
  width: 100%auto;
`;

const useMoneda = (stateInicial, opciones) => {
  const [state, setState] = useState(stateInicial);

  const SeleccionarMoneda = () => (
    <Fragment>
      <Label>Seleccione su moneda</Label>
      <div className="form-floating">
        <Select
          className="form-select"
          value={state}
          aria-label="Moneda"
          onChange={(e) => setState(e.target.value)}
        >
          <option value="">Seleccione una opcion</option>
          {opciones.map((opcion) => (
            <option key={opcion.codigo} value={opcion.codigo}>
              {opcion.nombre}
            </option>
          ))}
        </Select>
        <label htmlFor="floatingSelect">Moneda</label>
      </div>
    </Fragment>
  );
  return [state, SeleccionarMoneda, setState];
};

useMoneda.propTypes = {
  stateInicial: PropTypes.string.isRequired,
  opciones: PropTypes.array.isRequired,
};

export default useMoneda;
