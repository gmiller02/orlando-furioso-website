import React from 'react';

const RelationshipLine = ({ start, end, type }) => {
  return (
    <div
      className={`relationship-line ${type}`}
      style={{
        left: start.x,
        top: start.y,
        width: Math.abs(end.x - start.x),
        height: Math.abs(end.y - start.y),
      }}
    ></div>
  );
};

export default RelationshipLine;