import React from 'react';
import Charter from './Charter';

const ChartersList = ({ StarWarsCh }) => {
  return (
    <div>
      {StarWarsCh.map(Char => {
        <Charter StarWarsCh={Char} />;
      })}
    </div>
  );
};

export default ChartersList;
