import React from 'react';
import './signUp.css';
import { useNavigate } from 'react-router-dom';

import { FaSearchLocation } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";



const SignUp = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/home');
  };

  return (
    <div className='container'>
      <header className='navbar'>
        <a href='/'><h1 className='brand'><FaTruckFast/> CargoLink</h1></a>
        <button onClick={goHome} type='button' className='sticky-btn'><FaSearchLocation /> Buscar Transporte</button>
      </header>

      <div className="sign-up-form">
        <h2>Regístrate</h2>
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
            <label htmlFor="confirmar-contrasena">Confirmar Contraseña</label>
            <input type="password" id="confirmar-contrasena" name="confirmar-contrasena" />
          </div>
          <div className="form-group">
            <label htmlFor="tipo-carro">Tipo de Carro</label>
            <select id="tipo-carro" name="tipo-carro">
              <option value="suv">SUV</option>
              <option value="sedan">Sedán</option>
              <option value="pickup">Pickup</option>
              <option value="camion">Camión</option>
            </select>
          </div>

          <div class="form-group-chechbox">
            <input type="checkbox" id="terms" name="terms"/>
            <label for="terms">Acepto los términos y condiciones</label>
        </div>


          <div className="form-group">
            <p>¿Ya tienes una cuenta? <a href="/signIn">Inicia sesión</a></p>
          </div>
          <div className="form-group">
            <button type="submit" className="submit-btn">Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
