import React, { useState } from 'react'
import Player from './Player'
import playerContext from '../contexts/player'

export default function App({ name }) {
  const [health, setHealth] = useState(100)
  const [morale, setMorale] = useState(100)

  const actions = {
    exercise() {
      setHealth(health => health + 20)
      setMorale(morale => morale + 10)
    },

    eatJunkFood() {
      setHealth(health => health - 10)
      setMorale(morale => morale + 1)
    },

    catchUpWithFriends() {
      setMorale(morale => morale + 10)
    },
  }

  const playerData = {
    name,
    actions,
    scores: { health, morale }
  }

  const themeData = {
    backgroundColor: 'pink',
  }

  // create a separate theme.js inside contexts folder (identical to player.js)
  // pull it here into App
  // wrapp the thing with a themeContext.Provider
  // feeding in the themeData to the value prop
  // consume the theme from inside Display

  return (
    <div className='App'>
      <playerContext.Provider value={playerData}>
        {/* Player could be nested way down */}
        <Player />
      </playerContext.Provider>
    </div>
  )
}
