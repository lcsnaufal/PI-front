import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home/Home';
import Erro from './components/pages/UrlErrada/Erro';
import AnunciarPage from './components/pages/AnunciarPages/AnunciarCentral/AnunciarCentral';
import Automoveis from './components/pages/Categorias/Automoveis';
import Moveis from './components/pages/Categorias/Moveis';
import Eletronicos from './components/pages/Categorias/Eletronicos';
import Roupas from './components/pages/Categorias/Roupas';
import Instrumentos from './components/pages/Categorias/Instrumentos';

import AnunciarAutomoveis from './components/pages/AnunciarPages/AnunciarAutomoveis/AnunciarAutomoveis';
import AnunciarInstrumentos from './components/pages/AnunciarPages/AnunciarInstrumentos/AnunciarInstrumentos';
import AnunciarEletronicos from './components/pages/AnunciarPages/AnunciarEletronicos/AnunciarEletronicos';
import AnunciarMoveis from './components/pages/AnunciarPages/AnunciarMoveis/AnunciarMoveis';
import AnunciarRoupas from './components/pages/AnunciarPages/AnunciarRoupas/AnunciarRoupas';


export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route Component={Home} index path="/Home"/>
        <Route Component={AnunciarPage} path="/Anunciar"/>
        <Route Component={Erro} path="*"/>
        <Route Component={Automoveis} path="Automoveis"/>
        <Route Component={Eletronicos} path="Eletronicos"/>
        <Route Component={Roupas} path="Roupas"/>
        <Route Component={Moveis} path="Moveis"/>
        <Route Component={Instrumentos} path="Instrumentos"/>
        <Route Component={AnunciarAutomoveis} path="Anunciar/Automovel"/>
        <Route Component={AnunciarMoveis} path="Anunciar/Movel"/>
        <Route Component={AnunciarRoupas} path="Anunciar/Roupa"/>
        <Route Component={AnunciarEletronicos} path="Anunciar/Eletronico"/>
        <Route Component={AnunciarInstrumentos} path="Anunciar/Instrumento"/>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));

reportWebVitals();