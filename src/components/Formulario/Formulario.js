import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { auth, firestore } from "../../firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Formulario = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLogin, setIsLogin] = useState(true);
  const [, forceUpdate] = useState()


//Validaciones
  const validator = useRef(new SimpleReactValidator());
   const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //login

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validator.current.allValid()) {
      try {
        if (isLogin) {
          await signInWithEmailAndPassword(auth, formData.email, formData.password)
          alert("Ingreso exitoso!")
          navigate("/mi-cuenta")
        } else {
          const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password)

          await addDoc(collection(firestore, "usuarios"), {
            email: formData.email,
            uid: userCredential.user.uid,
            timestamp: new Date(),
          })

          alert("Registro exitoso!")
          navigate("/mi-cuenta")
        }

        setFormData({ email: "", password: "" })
        validator.current.hideMessages() // Limpiar mensajes 
      } catch (error) {
        alert("Error: " + error.message)
      }
    } else {
      validator.current.showMessages()

      // Forzar re-render para mostrar los mensajes de error (no me los estaba mostrando revisar)
      forceUpdate({});
    }
  }

  const toggleForm = () => {
    setIsLogin(!isLogin);

    // Limpiar formulario
    validator.current.hideMessages();
    setFormData({ email: "", password: "" })
    forceUpdate({})
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg mt-5">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-4">
                {isLogin ? "Ingresa a tu cuenta" : "Registro de nuevo usuario"}
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <div className="text-danger small mt-1">
                    {validator.current.message("email", formData.email, "required|email")}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <div className="text-danger small mt-1">
                    {validator.current.message("password", formData.password, "required|min:6")}
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-100 mb-3">
                  {isLogin ? "Iniciar sesión" : "Registrarse"}
                </button>
              </form>

              <div className="text-center">
                <button className="btn btn-link text-decoration-none" onClick={toggleForm}>
                  {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;