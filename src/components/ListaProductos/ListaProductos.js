import React, { useState } from 'react';
import Producto from '../Producto/Producto';
import './ListaProductos.css'; 

const ListaProductos = () => {
  const [carrito, setCarrito] = useState([]);

  const productos = [
    { 
      id: 1, 
      nombre: 'Latte', 
      precio: 3690, 
      imagen: require('../../imagenes/productos/latte.webp'),
      categoria: 'cafe' 
    },
    { 
      id: 2, 
      nombre: 'Capuchino', 
      precio: 3790, 
      imagen: require('../../imagenes/productos/capuchino.webp'),
      categoria: 'cafe' 
    },
    { 
      id: 3, 
      nombre: 'Sandwich Jamón Queso', 
      precio: 3490, 
      imagen: require('../../imagenes/productos/jamonQueso.webp'),
      categoria: 'sandwich' 
    },
    { 
      id: 4, 
      nombre: 'Sandwich Ave Palta', 
      precio: 3990, 
      imagen: require('../../imagenes/productos/AvePalta.webp'),
      categoria: 'sandwich' 
    }
  ];

  // Funcion para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {
      setCarrito(carrito.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ));
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  // Funcion para calcular el total del carrito
  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0)
      .toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
  };

  // Funcion para eliminar un producto del carrito
  const eliminarDelCarrito = (productoId) => {
    setCarrito(carrito.filter(item => item.id !== productoId));
  };

  // Funcion para reducir la cantidad de un producto
  const reducirCantidad = (productoId) => {
    setCarrito(carrito.map(item => 
      item.id === productoId && item.cantidad > 0
        ? { ...item, cantidad: item.cantidad - 1 }
        : item
    ).filter(item => item.cantidad > 0));
  };

  return (
    <div className="container my-4">
      {/* Header principal */}
      <div className="main-header">
        <h2>Nuestra Deliciosa Selección</h2>
        <p className="subtitle">Café artesanal y sándwiches gourmet para disfrutar</p>
      </div>

      {/* Primero */}
      <div className="main-content">
        <div className="productos-section">
          <div className="productos-grid">
            {productos.map((producto) => (
              <Producto
                key={producto.id}
                producto={producto}
                agregarAlCarrito={agregarAlCarrito}
              />
            ))}
          </div>
        </div>

        {/* Carrito*/}
        <div className="carrito">
          <div className="carrito-header">
            <h3>Tu Pedido</h3>
          </div>
          
          {carrito.length === 0 ? (
            <div className="mensajeCarrito">
              <p>Tu carrito está vacío</p>
              <small>¿Qué deseas pedir?</small>
            </div>
          ) : (
            <div>
              <ul className="carrito-items">
                {carrito.map((item) => (
                  <li key={item.id} className="carrito-item">
                    <div className="item-info">
                      <div className="item-nombre">{item.nombre}</div>
                      <div className="item-detalles">
                        <span className="item-precio">
                          ${item.precio.toLocaleString('es-CL')}
                        </span>
                        {' × '}
                        <span className="item-cantidad">{item.cantidad}</span>
                      </div>
                    </div>
                    <div className="item-actions">
                      <button 
                        className="btn-carrito btn-quitar" 
                        onClick={() => reducirCantidad(item.id)}
                        title="Quitar una unidad"
                      >
                        Quitar
                      </button>
                      <button 
                        className="btn-carrito btn-eliminar" 
                        onClick={() => eliminarDelCarrito(item.id)}
                        title="Eliminar completamente"
                      >
                        🗑️
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              
              {/* Total del carrito */}
              <div className="carrito-total">
                Total: {calcularTotal()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListaProductos;