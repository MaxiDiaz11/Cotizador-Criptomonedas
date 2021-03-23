import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Titulo = styled.h1`
  font-size: 60px;
  text-transform: uppercase;
  text-align: center;
  color: white;
  font-family: "Chakra Petch", sans-serif;
  @media (max-width: 992px) {
    font-size: 40px;
  }
`;

const Header = ({ mensaje }) => {
  return <Titulo>{mensaje}</Titulo>;
};

Header.propTypes = {
  mensaje: PropTypes.string.isRequired,
};

export default Header;
