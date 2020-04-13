import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import{primeraLetraMayuscula} from '../Helper'

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color:#FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {
    return ( 
<ContenedorResumen>

<h2>Resumen de cotizacion</h2>
        <ul>
            <li>Marca:{primeraLetraMayuscula(datos.marca)}</li>
    <li>Plan:{primeraLetraMayuscula(datos.plan)}</li>

    <li>Anio:{datos.year}</li>

        </ul>
</ContenedorResumen>

     );
}
 
export default Resumen;