import React from "react";
import './Producto.css'; 

// Producto recibe dos props: producto y agregarAlCarrito
const Producto = ({ producto, agregarAlCarrito }) => {
  // Función que maneja el clic en el botón para agregar el producto al carrito
  const manejarAgregarAlCarrito = () => {
    agregarAlCarrito(producto);  // Llamamos al callback con el producto
  };

  return (
    <div className="card shadow-sm h-100 card-product">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="card-img-top" 
      />
      <div className="card-body">
        
        <h5 className="card-title">{producto.nombre}</h5>
        
        <p className="card-text">${producto.precio}</p>
        
        <button 
          className="btn btn-primary btn-product"  
          onClick={manejarAgregarAlCarrito}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Producto;
