import React from 'react';
import './signIn.css';
import { useNavigate } from 'react-router-dom';

import { FaSearchLocation } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";



const SignUp = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/home');
  };

  const goPanelSocio = () => {
    navigate('/panelSocio')
  }

  return (
    <div className='container'>
      <header className='navbar'>
        <h1 className='brand'><FaTruckFast/> CargoLink</h1>
        <button onClick={goHome} type='button' className='sticky-btn'><FaSearchLocation /> Buscar Transporte</button>
      </header>

      <div className="sign-up-form">
        <h2>Iniciar Sesion</h2>
        <form>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="correo">Correo Electrónico</label>
            <input type="email" id="correo" name="correo" />
          </div>
          <div className="form-group">
            <label htmlFor="contrasena">Contraseña</label>
            <input type="password" id="contrasena" name="contrasena" />
          </div>


          <div className="form-group">
            <p>¿No tienes una cuenta? <a href="/signUp">Registrarse</a></p>
          </div>
          <div className="form-group">
            <button onClick={goPanelSocio} type="submit" className="submit-btn">Iniciar Sesion</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
