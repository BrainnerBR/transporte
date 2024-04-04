import React, { useContext, useEffect } from 'react';
import InputItem from './InputItem';
import './buscarViaje.css'
import { SourceContext } from '../../../context/SourceContext';
import { DestinationContext } from '../../../context/DestinationContext';

function BuscarViaje() {
  const {source, setSource} = useContext(SourceContext)
  const {destination, setDestination} = useContext(DestinationContext)

  useEffect(() => {
    if(source) {
      console.log(source)
    }
    if(destination){
      console.log(destination)
    }
  },[source, destination])
  return (
    <div className='buscarViaje'>
      <p>Busca tu viaje</p>
      <InputItem type='source'/>
      <InputItem type='destination'/>

      <button className='buscarViajeBtn'>Buscar</button>
    </div>
  );
}

export default BuscarViaje;
