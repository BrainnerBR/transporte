import React from 'react';
import './ViajesCerca.css'

import { MdCompareArrows } from 'react-icons/md';

import { CgSandClock } from "react-icons/cg";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Navbar from '../navbar/Navbar';

const ViajesCerca = () => {
  return (
    <div>

        <Navbar/>
      <div className='mainContainer'>

        <h1>Viajes Cerca</h1>

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
    </div>
  );
}

export default ViajesCerca;
