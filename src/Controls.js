import React from 'react';

function Controls({ actions }) {
  const actionNames = Object.keys(actions)

  return (
    <div className="Controls">
      {
        actionNames.map(actionName => {
          return (
            <button onClick={actions[actionName]}>{actionName}</button>
          )
        })
      }
    </div>
  );
}

export default Controls;
