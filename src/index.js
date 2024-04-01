import './index.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Landing from './components/landing/landing';
import ErrorPage from './components/errorPage/errorPage';
import Home from './components/home/home'
import CrearViaje from './components/crearViaje/crearViaje'
import SignUp from './components/signUp/SignUp';
import SignIn from './components/signIn/SignIn';
import PanelSocio from './components/panelSocio/panelSocio'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/crearViaje' element={<CrearViaje/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/panelSocio' element={<PanelSocio/>}/>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
