import React from 'react';
import Charter from './Charter';
import './StarWars.css';

const CharterList = ({ StarWarsCh, deleteChar }) => {
  return (
    <div className="container">
      {StarWarsCh.map(char => {
        return (
          <Charter char={char} key={char.created} deleteChar={deleteChar} />
        );
      })}
    </div>
  );
};

export default CharterList;
