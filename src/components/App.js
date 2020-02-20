import React, { useState } from 'react'
import Player from './Player'
import playerContext from '../contexts/player'
import { themeContext } from '../contexts/theme'

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
    scores: { health, morale },
  }

  const themeData = {
    backgroundColor: 'pink',
  }

  return (
    <themeContext.Provider value={themeData}>
      <div className='App'>
        <playerContext.Provider value={playerData}>
          {/* Player could be nested way down */}
          <Player />
        </playerContext.Provider>
      </div>
    </themeContext.Provider>
  )
}
