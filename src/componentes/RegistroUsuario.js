import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

    };
    return(
        <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div className="row w-100">
              {/* Columna izquierda de 3 unidades */}
              <div className="col-md-3" />

              {/* Columna central de 6 unidades */}
              <div className="col-md-6">
                <div className="p-4" style={{ border: 'none', backgroundColor: 'white' }}>
                  {/* Logo / Imagen */}
                  <div className="text-center mb-4">
                    <div
                      id="logo-placeholder"
                      className="mx-auto mb-3"
                      style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: '200px',
                        backgroundColor: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '8px',
                      }}
                    >
                      <img src='/imagenes/LogoLibroHub.png' alt="Logo de LibroHub" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    </div>
                  </div>

                  {/* Formulario de inicio de sesión */}
                  <h3 className="text-center mb-4" style={{fontFamily: 'Verdana, sans-serif', color: '#538fc6'}}>
                    REGISTRATE</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <input type="text" className="form-control" placeholder="NOMBRE" style={{
                               textAlign: 'center',
                               color: "black",
                               padding: '20px 20px'
                             }} />
                    </div>
                    <div className="form-group mb-3">
                      <input type="text" className="form-control" placeholder="DNI" style={{
                               textAlign: 'center',
                               color: "black",
                               padding: '20px 20px'
                             }} />
                    </div>
                    <div className="form-group mb-3">
                      <input type="password" className="form-control" placeholder="CONTRASEÑA" style={{
                               textAlign: 'center',
                               color: "black",
                               padding: '20px 20px'
                             }} />
                    </div>
                    <div className="d-grid" style= {{display: 'flex', justifyContent: 'center'}}>
                      <button type="submit" className="btn" style={{
                                alignContent: 'center',
                                backgroundColor: '#538fc6',
                                color: 'white',
                                borderRadius: '15px',
                                border: 'none',
                                padding: '10px 20px',
                                width: '160px'
                              }}>Registrarse</button>
                    </div>
                  </form>

                  {/* Enlace para registrarse */}
                  <p className="text-center mt-3" style={{ color: '#538fc6' }}>
                    ¿Ya tienes una cuenta? <Link to="/register" style={{ color: '#538fc6' }}>Iniciar Sesión.</Link>
                  </p>
                </div>
              </div>

              {/* Columna derecha de 3 unidades */}
              <div className="col-md-3" />
            </div>
          </div>
    );
}

export default Register;