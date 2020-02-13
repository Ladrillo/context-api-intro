import React from 'react';

function Display({ type, data }) {
  return (
    <div className="Display">
      {type} is at {data}
    </div>
  );
}

export default Display;
