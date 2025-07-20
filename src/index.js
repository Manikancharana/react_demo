import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM
import App from './App';
import Ternary from './Ternary';
import Clickevent from './Clickevent';
import Screensize from './Screensize';
import './App.css';
import Forms from './Forms';
import Array from './Array';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <App />
      <Ternary/>
      <Clickevent/>
      <Screensize/>
      <Forms/>
      <Array/>
    </>
  </React.StrictMode>
);
