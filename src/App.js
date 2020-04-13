import React, { useState, Fragment } from 'react';
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import Resumen from './Components/Resumen'
import styled from '@emotion/styled'
import Resultado from './Components/Resultado';



const Contenedor = styled.div ` 
  max-width: 600px;
  margin:0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;
const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;
function App() {

  const[resumen, guardarResumen] = useState({});


  const {datos, cotizacion} = resumen
  return (

    <Contenedor>
          <Header titulo="Cotizador seguros"/>
          <ContenedorFormulario>
            <Formulario guardarResumen={guardarResumen}/>

            {datos ?
            <>
              <Resumen datos={datos}/>
            </>
            : null}
            {cotizacion ?
            <Resultado cotizacion={cotizacion}/>
            : 
            <Mensaje>
              Elige marca, año y tipo de seguro
            </Mensaje>
            }

          </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
