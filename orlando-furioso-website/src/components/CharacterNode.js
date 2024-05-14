import React from 'react';
import './CharacterNode.css';

const CharacterNode = ({ character, onClick }) => {
  return (
    <div className="character-node" onClick={() => onClick(character)}>
      <p>{character.name}</p>
    </div>
  );
};

export default CharacterNode;