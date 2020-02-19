import React from 'react'
import Display from './Display'
import Controls from './Controls'

export default function Player({
  name,
  health,
  morale,
  exercise,
  eatJunkFood,
  catchUpWithFriends,
}) {
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

      <Controls
        actions={{
          exercise,
          eatJunkFood,
          catchUpWithFriends,
        }}
      />
    </div>
  );
}
