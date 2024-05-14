import React from 'react';


const DescriptionBox = ({ character }) => {
    console.log('DescriptionBox is rendering:', character);
  return (
    <div className="description-box">
      <p>{character.description}</p>
    </div>
  );
};

export default DescriptionBox;