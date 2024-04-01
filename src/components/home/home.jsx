import React, { useState } from 'react';
import './home.css';
import '../crearViaje/crearViaje.css'
import { MdCompareArrows } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { FaTruckFast } from "react-icons/fa6";
import { CgSandClock } from "react-icons/cg";
import { BsFillPersonLinesFill } from "react-icons/bs";


const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    origen: '',
    destino: '',
    tipoCarga: '',
  });
  const navigate = useNavigate();
  const goSignUp = () => {
    navigate('/signUp')
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const crearViaje = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías realizar validaciones del formulario
    // y luego agregar la nueva fila a la tabla con los datos ingresados
    // por ejemplo, podrías actualizar el estado de tu componente
    // o hacer una llamada a una API para guardar los datos en el backend
    // Aquí simulamos la actualización del estado
    // Agrega tu lógica para guardar los datos
    handleCloseModal();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        <button onClick={crearViaje} className="btn">
          Pedir Transporte
        </button>
      </header>

      <nav className="navbar-left">
        <ul>
          <li>
            <a href="#">Opción A</a>
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

      <div className="mainContainer">
        <h1>Viajes Disponibles</h1>
        <table className="viajesTable">
          <thead>
            <tr>
              <th>
                Salida <MdCompareArrows /> Llegada
              </th>
              <th><CgSandClock /> Tiempo</th>
              <th><BsFillPersonLinesFill /> Conductor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Virilla <MdCompareArrows /> San ramon</td>
              <td>9:54</td>
              <td>Andres</td>
            </tr>
            <tr>
              <td>San Ramon <MdCompareArrows /> Puntarenas</td>
              <td>14:12</td>
              <td>Juan</td>
            </tr>
            <tr>
              <td>Alajuela <MdCompareArrows /> Limon</td>
              <td>35:45</td>
              <td>Roberto</td>
            </tr>
            <tr>
              <td>Alajuela <MdCompareArrows /> Puntarenas</td>
              <td>39:45</td>
              <td>Pedro</td>
            </tr>
            <tr>
              <td>Heredia <MdCompareArrows /> Limon</td>
              <td>15:95</td>
              <td>Carlos</td>
            </tr>
            
          </tbody>
        </table>
      </div>

      {/* Modal para el formulario de crear viaje */}
      {showModal && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Crear Nuevo Viaje</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
              <label htmlFor="origen">Origen:</label>
              <input
                type="text"
                id="origen"
                name="origen"
                value={formData.origen}
                onChange={handleChange}
              />
              <label htmlFor="destino">Destino:</label>
              <input
                type="text"
                id="destino"
                name="destino"
                value={formData.destino}
                onChange={handleChange}
              />
              <label htmlFor="tipoCarga">Tipo de Carga:</label>
              <input
                type="text"
                id="tipoCarga"
                name="tipoCarga"
                value={formData.tipoCarga}
                onChange={handleChange}
              />
              <button type="submit">Crear Viaje</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
