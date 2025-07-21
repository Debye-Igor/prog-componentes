import React from 'react';
import Formulario from '../components/Formulario/Formulario';

const Ejercicios2y3 = () => {
  const containerStyle = {
    display: 'flex' ,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center', 
  };

  return (
    <div style={containerStyle}>
      <h1>Ejercicios 2 y 3: Formulario y Estilización</h1>
      <p>Exámen programación de componentes</p>
      <Formulario />
    </div>
  );
};

export default Ejercicios2y3;
