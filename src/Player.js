import React from 'react'
import Display from './Display'
import Controls from './Controls'

function Player({
  name,
  health,
  morale,
  exercise,
  eatJunkFood,
  catchUpWithFriends,
}) {

  return (
    <div className="Player">
      The player's name is {name}
      <Display type='Health' data={health} />
      <Display type='Morale' data={morale} />
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

export default Player;
