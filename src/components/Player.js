import React from 'react'
import Display from './Display'
import Controls from './Controls'

export default function Player({ name }) {
  return (
    <div className="Player">
      <h4>The player's name is {name}</h4>

      <Display type='health' />
      <Display type='morale' />

      <Controls />
    </div>
  );
}
