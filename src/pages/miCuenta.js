import React from "react";
import { auth } from "../firebase.js";
import { signOut } from "firebase/auth";
import FormUpload from "../components/FormUpload/FormUpload.js";

const MiCuenta = () => {

  // Función para cerrar sesión
  const handleSignOut = async () => {
    try {
      await signOut(auth); // Cerrar sesión en Firebase Auth
      alert("Sesión cerrada con éxito.");
      window.location.href = "/"; 
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      alert("Hubo un error al cerrar sesión.");
    }
  };

  return (
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-lg-10">
        {/* Header */}
        <div className="card shadow-sm mb-4">
          <div className="card-body bg-light">
            <h2 className="text-center text-primary mb-3">📊 Panel General</h2>
            
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-1">Bienvenido,</h5>
                <span className="text-muted">{auth.currentUser?.email}</span>
              </div>
              
              <button className="btn btn-outline-danger" onClick={handleSignOut}>
                <i className="bi bi-box-arrow-right me-1"></i>
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>

        {/* Componente formulrio de subida de archivos */}
        <FormUpload/>
      </div>
    </div>
  </div>  
);
};

export default MiCuenta;
