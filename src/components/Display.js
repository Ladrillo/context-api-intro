import React from 'react';

const getStyle = points => ({
  color: `${points > 50 ? 'green' : 'red'}`
})

export default function Display({ type, data }) {
  return (
    <div className="Display">
      {type} is at <span style={getStyle(data)} className='points'>{data}</span>
    </div>
  );
}
