import React, { useState } from 'react'
import Player from './Player'

export default function App({ name }) {
  const [health, setHealth] = useState(100)
  const [morale, setMorale] = useState(100)

  const actions = {
    exercise() {
      setHealth(health => health + 20)
      setMorale(health => health + 10)
    },

    eatJunkFood() {
      setMorale(health => health + 1)
      setHealth(health => health - 10)
    },

    catchUpWithFriends() {
      setMorale(health => health + 10)
    }
  }

  return (
    <div className="App">
      <Player
        name={name}
        data={{ health, morale }}
        actions={actions}
      />
    </div >
  );
}
