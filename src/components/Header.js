import React from 'react';
import styled from "@emotion/styled";

const Titulo = styled.h1`
    padding: 0.5rem;
    font-size: 60px;
    text-transform: uppercase;
    color: white;
    font-family: 'Chakra Petch', sans-serif;
`

const Header = ({mensaje}) => {
    return ( 
        <Titulo>{mensaje}</Titulo>
     );
}
 
export default Header;