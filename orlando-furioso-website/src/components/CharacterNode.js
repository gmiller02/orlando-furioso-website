import React from 'react';
import './CharacterNode.css';

const CharacterNode = ({ character, onClick, getPosition }) => {
  const handleMouseDown = (event) => {
    getPosition(character, event.clientX, event.clientY);
    onClick(character);
  };

  return (
    <div className="character-node" onMouseDown={handleMouseDown}>
      <p>{character.name}</p>
    </div>
  );
};

export default CharacterNode;