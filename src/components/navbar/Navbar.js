import React from 'react';
import './Navbar.css'

import { FaTruckFast } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';




const Navbar = () => {

    const navigate = useNavigate();

    const goViajesCerca = () => {
        navigate('/viajesCerca');
    };


  return (
    <div>
            <header className="navbar-top">
        <div className="logo"><FaTruckFast/> CargoLink</div>
        <nav className="nav-menu">
          <ul>
            <li>
              <a href="/signUp">Socios</a>
            </li>
            <li>
              <a href="/">Como funciona?</a>
            </li>
            <li>
              <a href="#">Ayuda</a>
            </li>
          </ul>
        </nav>
        <button onClick={goViajesCerca} className="btn">
         Viajes cerca
        </button>
      </header>

      <nav className="navbar-left">
        <ul>
          <li>
            <a href="/home">Inicio</a>
          </li>
          <li>
            <a href="#">Opción B</a>
          </li>
          <li>
            <a href="#">Opción C</a>
          </li>
          <li className="last-option">
            <a href="#">Última Opción</a>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default Navbar;
