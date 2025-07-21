import React from 'react';
import './Index.css';

const paginaInicio = () => {
  return (
    <div className="page">
      
      <header className="header">
        <h1>DEBYE IGOR</h1>
        <p>Programación de Componentes</p>
      </header>

      <main className="main">
        
        <div className="status">
          <span className="dot"></span>
          Proyecto con React
        </div>

        <section className="info">
          <p>Aplicación web </p>
          
          <div className="list">
            <p>• Gestión de Productos y Carrito con React</p>
            <p>• Formulario Login/Registro/subida de archivos con Firebase</p>
            <p>• Estilos con boostrap y generación de APK</p>
          </div>
        </section>

        <div className="grid">
          <div className="card_index">
            <span>✅</span>
            <h3>React</h3>
          </div>
          <div className="card_index">
            <span>🔥</span>
            <h3>Firebase</h3>
          </div>
          <div className="card_index">
            <span>🔐</span>
            <h3>Auth</h3>
          </div>
          <div className="card_index">
            <span>📲</span>
            <h3>APK</h3>
          </div>
        </div>

      </main>

      <footer className="footer">
        <p>© 2025 Debye Igor</p>
      </footer>
      
    </div>
  );
};

export default paginaInicio;