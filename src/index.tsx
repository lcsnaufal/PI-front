import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar/Navbar';

export default function App() {
  return(
    <Navbar/>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));

reportWebVitals();