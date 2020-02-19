import React, { useContext } from 'react'
import Display from './Display'
import Controls from './Controls'
import playerContext from '../contexts/player'

export default function Player() {
  const { name, scores: { health, morale }} = useContext(playerContext)

  return (
    <div className="Player">
      <h4>The player's name is {name}</h4>

      <Display
        type='Health'
        data={health}
      />

      <Display
        type='Morale'
        data={morale}
      />

      <Controls />
    </div>
  );
}
