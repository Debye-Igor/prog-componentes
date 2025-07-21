
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu'; 
import Index from './pages/Index'; 
import Ejercicio1 from './pages/Ejercicio1'; 
import Ejercicios2y3 from './pages/Ejercicios2y3';
import MiCuenta from './pages/miCuenta';


function App() {
  return (
    <Router>
      <header><Menu/></header>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} /> 
          <Route path="/ejercicio1" element={<Ejercicio1 />} /> 
          <Route path="/ejercicios2y3" element={<Ejercicios2y3 />} /> 
          <Route path="/mi-cuenta" element={<MiCuenta />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
