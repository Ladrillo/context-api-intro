import React from 'react'
import Display from './Display'
import Controls from './Controls'

export default function Player({ name, actions, scores }) {
  return (
    <div className="Player">
      <h4>Player's name is&nbsp;
        <span className="fancy">{name}</span></h4>

      <Display
        type='Health'
        data={scores.health}
      />

      <Display
        type='Morale'
        data={scores.morale}
      />

      <Controls actions={actions} />
    </div>
  );
}
