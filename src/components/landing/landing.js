import React from 'react';
import './landing.css';

import { useNavigate } from 'react-router-dom';

import destination from '../../assets/undraw_destination_re_sr74 (1).svg';
import clock from '../../assets/undraw_time_management_re_tk5w.svg';

import { FaClock } from "react-icons/fa";
import { MdLockPerson } from "react-icons/md";
import { MdCompareArrows } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { FaSearchLocation } from "react-icons/fa";


const Landing = () => {

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/home');
    };
    const goSignUp = () => {
      navigate('/signUp')
    }


  return (
    <div>
      <header className='navbar'>
        <a href='/'><h1 className='brand'><FaTruckFast/> CargoLink</h1></a>
             <button onClick={goHome} type='button' className='sticky-btn'><FaSearchLocation /> Buscar Transporte</button>
      </header>

      <main>
        <section className='section-one'>
          <h1>Mueve Tus Recursos, Optimiza Tu Trayecto</h1>
          <h3 className='fade-in-text'>Conecta transporte para optimizar la entrega de recursos, reduciendo costos y tiempo en cada envío</h3>
          <button className='fade-in-text' onClick={goHome}><FaSearchLocation /> Buscar Transporte</button>
        </section>

        <section className='section-two'>
          <div className='sobreNosotros'>
            <h2>Sobre Nosotros</h2>
            <p>En CargoLink, nos apasiona transformar la movilización de recursos en una experiencia eficiente y segura para todos.
              Nuestro enfoque se centra en revolucionar la logística, aprovechando la tecnología para optimizar trayectos y conectar a personas de manera más inteligente y efectiva.
              Creemos en la importancia de ofrecer soluciones de transporte que no solo sean eficientes desde el punto de vista logístico, sino también seguras y confiables para nuestros
              usuarios. Con un compromiso constante con la innovación y la excelencia, estamos aquí para impulsar un cambio positivo en la forma en que se mueven los recursos, brindando
              comodidad, seguridad y tranquilidad a cada paso del camino.</p>
          </div>
          <div className='caracteristicas'>
            <div className='caracteristica'>
              <h3>Comunicación <MdCompareArrows /></h3>
              <p>Priorizamos la comunicación transparente y efectiva en todas las etapas del proceso. Nos comprometemos a mantener una comunicación clara con nuestros clientes y socios para garantizar una experiencia fluida y satisfactoria.</p>
            </div>

            <div className='caracteristica'>
              <h3>Eficacia <FaClock /></h3>
              <p>Nos enorgullece nuestra capacidad para ofrecer soluciones de transporte eficaces. Con enfoque centrado en la optimización de rutas, aseguramos que cada envío se realice de manera rápida y sin contratiempos.</p>
            </div>

            <div className='caracteristica'>
              <h3>Seguridad <MdLockPerson /></h3>
              <p>La seguridad es nuestra principal prioridad. Implementamos rigurosos estándares de seguridad y protocolos para garantizar la protección de los recursos durante todo el proceso de transporte.</p>
            </div>
          </div>
        </section>

        <section className='section-three'>
          <div className='container1'>
            <div className='carrusel'>
              <h2>| Agrecon |</h2>
              <h2>Agrecon |</h2>
              <h2>Agrecon |</h2>
              <h2>Agrecon |</h2>
            </div>
          </div>

          <div className='container1'>
            <div className='right-container'>
              <img src={destination} alt='Conecta!' />
            </div>
            <div className='left-container'>
              <p>Conecta Fácilmente con nuestros socios</p>
            </div>
          </div>

          <div className='container2'>
            <div className='left-container'>
              <p>Ahorra tiempo y dinero</p>
            </div>
            <div className='right-container'>
              <img src={clock} alt='Conecta!' />
            </div>
          </div>
        </section>

        <section className='section-four'>
          <div className='joinContainer'>
            <h2>Quieres ser socio?</h2>
            <p>Como socio tendrás acceso a una red de oportunidades y beneficios. ¡No pierdas la oportunidad de ser parte de algo grande!</p>
            <button onClick={goSignUp}>Crear Cuenta</button>
          </div>
        </section>

        <footer>
          <div className='footContainer'>
            <div className='leftContainer'>
              <a href='/'><h1><FaTruckFast/> CargoLink</h1></a>
              <h2>Mueve Tus Recursos, Optimiza Tu Trayecto</h2>
            </div>
            <div className='rightContainer'>
              <h2>Contacto</h2>
              <ul>
                <li><a><CgMail /> Gmail</a></li>
                <li><a><FaWhatsapp /> Whatsapp</a></li>
                <li><a> <MdLocalPhone /> 2445-4995</a></li>
              </ul>
            </div>
            <div className='bottom'>
              <p>@2024 BBR. Copyright and all rights reserved</p>
              <a>Terms and Conditions</a>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}

export default Landing;
