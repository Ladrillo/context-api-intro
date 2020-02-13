import React, { useState } from 'react'
import Player from './Player'

export default function App({ name }) {
  const [health, setHealth] = useState(100)
  const [morale, setMorale] = useState(100)

  const exercise = () => {
    setHealth(health => health + 10)
    setMorale(health => health + 5)
  }

  const eatJunkFood = () => {
    setHealth(health => health - 10)
  }

  const catchUpWithFriends = () => {
    setMorale(health => health + 10)
  }

  return (
    <div className="App">
      <Player
        // state
        name={name}
        health={health}
        // callbacks that operate on state
        morale={morale}
        exercise={exercise}
        eatJunkFood={eatJunkFood}
        catchUpWithFriends={catchUpWithFriends}
      />
    </div>
  );
}
