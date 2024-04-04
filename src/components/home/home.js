import React, { useState } from 'react';
import './home.css';
import BuscarViaje from './buscarViaje/BuscarViaje';
import GoogleMap from './buscarViaje/GoogleMapSection'


import Navbar from '../navbar/Navbar';
import { DestinationContext } from '../../context/DestinationContext';
import { SourceContext } from '../../context/SourceContext';


const Home = () => {
  const [source, setSource] = useState([]);
  const [destination,setDestination] = useState([])


  return (
    <SourceContext.Provider value={{source, setSource}}>    
    <DestinationContext.Provider value={{destination,setDestination}}>
      <div>
        <Navbar/>
        <div className="mainContainerBuscar">
          <div className='buscarViajeContainer'>          
          <BuscarViaje/>
          </div>
          <div className='mapContainer'>
            <GoogleMap/>
          </div>
        </div>
      </div>
    </DestinationContext.Provider>
    </SourceContext.Provider>
  );
};

export default Home;
