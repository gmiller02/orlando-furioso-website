import React, { useEffect, useRef } from 'react';
import './CharacterNode.css';

const CharacterNode = ({ character, onClick, getPosition }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (node) {
      const { x, y } = node.getBoundingClientRect();
      getPosition(character, x, y);
    }
  }, [character, getPosition]);

  const handleMouseDown = () => {
    onClick(character);
  };

  // Determine the CSS class based on the character's army
  const armyClass = character.army === "Charlemagne's Army" ? "charlemagne-army" : 
                   character.army === "Agramante's Army" ? "agramante-army" : "";

  return (
    <div className={`character-node ${armyClass}`} onMouseDown={handleMouseDown}>
      <p>{character.name}</p>
    </div>
  );
};

export default CharacterNode;


// import React from 'react';
// import './CharacterNode.css';

// const CharacterNode = ({ character, onClick, getPosition }) => {
//   const handleMouseDown = (event) => {
//     getPosition(character, event.clientX, event.clientY);
//     onClick(character);
//   };

//   return (
//     <div className="character-node" onMouseDown={handleMouseDown}>
//       <p>{character.name}</p>
//     </div>
//   );
// };

// export default CharacterNode;