import React, { useState } from 'react';
import './App.css';
import Catalogo from './components/Catalogo';

function App() {
  const [productos] = useState([
    {
      name: 'Pepsi', price: 200, description: 'Pepsi, también conocida como Pepsi-Cola, es una gaseosa de cola', stock: true,
    },
    {
      name: 'Galletitas', price: 100, description: 'Galletitas surtidas', stock: false,
    },
    {
      name: 'Coca Cola', price: 230, description: 'es una gaseosa de cola', stock: true,
    },
    {
      name: 'Sprite', price: 200, description: 'gaseosa lima limon', stock: false,
    },
  ]);

  const [stock, setStock] = useState(false);

  return (
    <div className="App">
      <h1> Catalogo de Productos</h1>
      { !stock ? (
        <Catalogo productos={productos} />
      ) : (
        <Catalogo productos={productos.filter((producto) => producto.stock === true)} />
      )}
      <button type="button" onClick={() => setStock(true)}>ver stock</button>
      <button type="button" onClick={() => setStock(false)}>ver todos los productos</button>
    </div>
  );
}

export default App;
