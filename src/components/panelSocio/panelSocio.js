import React from 'react';
import './panelSocio.css'

const panelSocio = () => {
  return (
    <div>
        <header className="navbar-top">
            <div className="logo">CargoLink</div>
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
            <button className="btn">
            Pedir Transporte
            </button>
      </header>

      <nav className="navbar-left">
        <ul>
          <li>
            <a href="#">Mis Viajes</a>
          </li>
          <li>
            <a href="#">Informacion</a>
          </li>
          <li>
            <a href="#">Chats</a>
          </li>
          <li className="last-option">
            <a href="#">Última Opción</a>
          </li>
        </ul>
      </nav>
      <div className='mainContainerPanel'>
      <div class="profile-container">
        <div class="profile-info">
            <img src="https://images.unsplash.com/photo-1495211895963-08d8812dcbf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcmZpbCUyMGRlJTIwaW5zdGFncmFtfGVufDB8fDB8fHww" alt="Profile Picture" class="profile-picture"/>
            <div class="profile-details">
                <h2>User Name</h2>
                <div class="user-stats">
                    <div class="stat">
                        <h3>Total Viajes</h3>
                        <p>250</p>
                    </div>
                    <div class="stat">
                        <h3>Tipo de Carro</h3>
                        <p>Pickup</p>
                    </div>
                    <div class="stat">
                        <h3>Tiempo en la App</h3>
                        <p>2 años</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

      </div>
    </div>
  );
}

export default panelSocio;
