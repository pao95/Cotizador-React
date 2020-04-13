import React from 'react';
import styled from '@emotion/styled'
const Mensaje = styled.h2`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const Resultado = ({cotizacion}) => {
    return ( 

    <Mensaje>Total a pagar: {cotizacion}</Mensaje>
     );
}
 
export default Resultado;