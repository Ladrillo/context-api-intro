import React, { useContext } from 'react'
import playerContext from "../contexts/player"
import { themeContext } from '../contexts/theme'


export default function Controls() {
  const { actions } = useContext(playerContext)
  const stuff = useContext(themeContext)
  return (
    <div className='Controls' style={{ ...stuff }}>
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
  )
}
