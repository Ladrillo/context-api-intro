import React from 'react';

const getStyle = points => ({
  color: `${points > 50 ? 'green' : 'red'}`
})

function Display({ type, data }) {
  return (
    <div className="Display">
      {type} is at <span style={getStyle(data)} className='points'>{data}</span>
    </div>
  );
}

export default Display;
