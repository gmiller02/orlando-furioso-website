import React from 'react';

const RelationshipLine = ({ startX, startY, endX, endY, type }) => {
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
