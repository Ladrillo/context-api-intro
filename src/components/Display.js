import React, { useContext } from 'react';
import playerContext from '../contexts/player'

const getStyle = points => ({
  color: `${points > 50 ? 'green' : 'red'}`
})

export default function Display({ type }) {
  const { scores } = useContext(playerContext)
  const data = scores[type]

  return (
    <div className="Display">
      {type} is at <span style={getStyle(data)} className='points'>{data}</span>
    </div>
  );
}
