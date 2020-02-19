import React from 'react'
import Display from './Display'
import Controls from './Controls'

export default function Player({
  name,
  data,
  actions,
}) {
  return (
    <div className="Player">
      <h4>The player's name is {name}</h4>

      <Display
        type='Health'
        data={data.health}
      />
      <Display
        type='Morale'
        data={data.morale}
      />

      <Controls
        actions={actions}
      />
    </div>
  );
}
