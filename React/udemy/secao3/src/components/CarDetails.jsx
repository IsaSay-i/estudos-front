import React from 'react';

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>Km: {km}</li>
        <li>Cor: {color}</li>
        {newCar && <p>Carro novo!</p>}
      </ul>
    </>
  );
};

export default CarDetails;