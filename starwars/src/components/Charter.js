import React from 'react';
import './StarWars.css';

const Charter = ({ char, deleteChar }) => {
  return (
    <div className="card">
      <h4> Name :{char.name}</h4>

      <h4> Hair :{char.hair_color}</h4>
      <h4> Height :{char.height}</h4>
      <h4> Gender :{char.gender}</h4>
      <h4> Mass :{char.mass}</h4>
      <h4> Birth Year :{char.birth_year}</h4>
      <button onClick={() => deleteChar(char.created)}>Use The Force</button>
    </div>
  );
};

export default Charter;
