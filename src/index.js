import './index.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Landing from './components/landing/landing';
import ErrorPage from './components/errorPage/errorPage';
import Home from './components/home/home'
import SignUp from './components/signUp/SignUp';
import SignIn from './components/signIn/SignIn';
import PanelSocio from './components/panelSocio/panelSocio'
import ViajesCerca from './components/viajesCerca/ViajesCerca';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/panelSocio' element={<PanelSocio/>}/>
        <Route path='/viajesCerca' element={<ViajesCerca/>}/>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
