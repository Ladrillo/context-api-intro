import React, { useState } from 'react'
import Player from './Player'
import playerContext from '../contexts/player'

export default function App({ name }) {
  const [health, setHealth] = useState(100)
  const [morale, setMorale] = useState(100)

  const exercise = () => {
    setHealth(health => health + 20)
    setMorale(health => health + 10)
  }

  const eatJunkFood = () => {
    setMorale(health => health + 1)
    setHealth(health => health - 10)
  }

  const catchUpWithFriends = () => {
    setMorale(health => health + 10)
  }

  return (
    <div className="App">
      <playerContext.Provider value={{
        actions: { exercise, eatJunkFood, catchUpWithFriends },
        scores: { health, morale },
      }}>
        <Player name={name} />
      </playerContext.Provider>
    </div >
  );
}
