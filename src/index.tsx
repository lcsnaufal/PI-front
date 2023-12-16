import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import Teste from './components/pages/Teste';
import AnunciarPage from './components/pages/AnunciarPage';
import Cars from './components/pages/Cars';
import Furnitures from './components/pages/Furnitures';
import Eletronicos from './components/pages/Eletronicos';
import Clothes from './components/pages/Clothes';
import Instruments from './components/pages/Instruments';


export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route Component={Home} index/>
        <Route Component={AnunciarPage} path="/anunciar"/>
        <Route Component={Teste} path="/teste"/>
        <Route Component={Cars} path="Automoveis"/>
        <Route Component={Eletronicos} path="Eletronicos"/>
        <Route Component={Clothes} path="Roupas"/>
        <Route Component={Furnitures} path="Moveis"/>
        <Route Component={Instruments} path="Instrumentos"/>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));

reportWebVitals();