import React, { useState } from 'react';
import CharacterNode from './CharacterNode';
import RelationshipLine from './RelationshipLine';
import './CharacterMap.css';
import DescriptionBox from './DescriptionBox';

const CharacterMap = ({ characters, relationships }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [position, setPosition] = useState({});

  const handleClick = (character) => {
    setSelectedCharacter(selectedCharacter === character ? null : character);
  };

  const handlePosition = (character, x, y) => {
    setPosition({ ...position, [character.name]: { x, y } });
  };

  return (
    <div className="character-map-container">
      {selectedCharacter && (
          <div className="description-box">
            <DescriptionBox character={selectedCharacter} />
            <br></br>
          </div>
        )}
      <div className="character-map">


        {/* Render relationship lines */}
        {relationships.map((relationship, index) => {
          const [charA, charB] = relationship.characters;
          const start = position[charA];
          const end = position[charB];
          return start && end ? (
            <RelationshipLine
              key={index}
              startX={start.x}
              startY={start.y}
              endX={end.x}
              endY={end.y}
              type={relationship.type}
            />
          ) : null;
        })}

        {characters.map((character, index) => (
          <CharacterNode
            key={index}
            character={character}
            onClick={handleClick}
            getPosition={handlePosition}
          />
        ))}

    
      </div>
    </div>
  );
};

export default CharacterMap;