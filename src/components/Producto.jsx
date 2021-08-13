import React from 'react';

const Producto = ({ producto }) => (
  <div className="App">
    <h3>
      {producto.name}
      {' '}
    </h3>
    <span>
      {producto.price}
      {' '}
    </span>
    <p>
      {producto.description}
      {' '}
    </p>
    <p>{producto.stock}</p>
  </div>
);

export default Producto;
