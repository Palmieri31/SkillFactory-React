import React from 'react';
import '../App.css';

/* Componentes */
import Producto from './Producto';

const Catalogo = ({ productos }) => (
  <div className="App">
    {
        productos.map((producto) => <Producto producto={producto} />)
    }
  </div>
);

export default Catalogo;
