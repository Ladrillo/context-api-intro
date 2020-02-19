import React from 'react'

export default function Controls({ actions }) {
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
