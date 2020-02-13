import React, { useState } from 'react'
import Player from './Player'
import './App.css';

function App({ name }) {
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

  const readNewsPaper = () => {
    setHealth(health => health - 5)
    setMorale(health => health + 25)
  }

  return (
    <div className="App">
      <Player
        name={name}
        health={health}
        morale={morale}
        exercise={exercise}
        eatJunkFood={eatJunkFood}
        catchUpWithFriends={catchUpWithFriends}
        readNewsPaper={readNewsPaper}
      />
    </div>
  );
}

export default App;
