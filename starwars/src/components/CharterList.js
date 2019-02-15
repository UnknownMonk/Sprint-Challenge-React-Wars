import React from 'react';
import Charter from './Charter';
import './StarWars.css';

const CharterList = ({ StarWarsCh }) => {
  return (
    <div className="card">
      {StarWarsCh.map(char => {
        return <Charter char={char} />;
      })}
    </div>
  );
};

export default CharterList;
