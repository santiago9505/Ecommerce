import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css';
import Map from '../components/Map.js';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegará en 3 días a tu direción</span>
        <div className="Succes-map">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Success;
