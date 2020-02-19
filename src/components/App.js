import React, { useState } from 'react'
import playerContext from '../contexts/player'
import Player from './Player'

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

    watchTheNews() {
      setMorale(morale => morale - 30)
    },
  }

  return (
    <div className="App">
      <playerContext.Provider value={{
        name,
        actions,
        scores: { health, morale }
      }}>
        <Player />
      </playerContext.Provider>
    </div >
  );
}
