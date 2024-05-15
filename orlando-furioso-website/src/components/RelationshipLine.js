import React from 'react';

const RelationshipLine = ({ start, end, type }) => {
  const startX = start.x + 50; // Adjust for character node size
  const startY = start.y + 50; // Adjust for character node size
  const endX = end.x + 50; // Adjust for character node size
  const endY = end.y + 50; // Adjust for character node size

  const style = {
    position: 'absolute',
    left: Math.min(startX, endX),
    top: Math.min(startY, endY),
    width: Math.abs(endX - startX),
    height: Math.abs(endY - startY),
    borderTop: '1px solid black', // Thin line border
    transformOrigin: 'top left',
    transform: `rotate(${Math.atan2(endY - startY, endX - startX)}rad)`
  };

  return <div className={`relationship-line ${type}`} style={style}></div>;
};

export default RelationshipLine;

// import React from 'react';

// const RelationshipLine = ({ start, end, type }) => {
//   return (
//     <div
//       className={`relationship-line ${type}`}
//       style={{
//         left: start.x,
//         top: start.y,
//         width: Math.abs(end.x - start.x),
//         height: Math.abs(end.y - start.y),
//       }}
//     ></div>
//   );
// };

// export default RelationshipLine;