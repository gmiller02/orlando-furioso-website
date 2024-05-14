import React, { useState } from 'react';
import CharacterNode from './CharacterNode';
import RelationshipLine from './RelationshipLine';
import './CharacterMap.css';
import DescriptionBox from './DescriptionBox';

const CharacterMap = ({ characters, relationships }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleClick = (character) => {
    setSelectedCharacter(selectedCharacter === character ? null : character);
  };

  return (
    <div className="character-map-container">
      <div className="character-map">
        {characters.map((character, index) => (
          <div
            key={index}
            className={`character-node ${selectedCharacter === character ? 'selected' : ''}`}
            onClick={() => handleClick(character)}
          >
            <p>{character.name}</p>
          </div>
        ))}

        {/* Render relationship lines */}
        {relationships.map((relationship, index) => {
          const [charA, charB] = relationship.characters;
          const start = characters.find(char => char.name === charA);
          const end = characters.find(char => char.name === charB);
          return (
            <RelationshipLine key={index} start={start} end={end} type={relationship.type} />
          );
        })}

{selectedCharacter && (
        <div className="description-box">
          <DescriptionBox character={selectedCharacter} />
        </div>
      )}
      </div>
    </div>
  );
};

export default CharacterMap;