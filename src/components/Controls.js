import React, { useContext } from 'react'
import playerContext from '../contexts/player'

export default function Controls() {
  const { actions } = useContext(playerContext)

  return (
    <div className="Controls">
      {
        Object.keys(actions).map(actionName => {
          return (
            <button
              key={actionName}
              onClick={actions[actionName]}
            >
              {actionName}
            </button>
          )
        })
      }
    </div>
  );
}
