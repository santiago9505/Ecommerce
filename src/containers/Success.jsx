import React from 'react';
import '../styles/components/Success.css';

const Success = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Santiago, Gracias por tu compra</h2>
        <span>Tu pedido llegará en 3 días a tu direción</span>
        <div className="Succes-map">Google Maps</div>
      </div>
    </div>
  );
};

export default Success;
