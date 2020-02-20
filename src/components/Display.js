import React, { useContext } from 'react'
import { themeContext } from '../contexts/theme'

const getStyle = points => ({
  color: `${points > 50 ? 'rgb(91, 134, 27)' : 'rgb(163, 0, 0)'}`
})

export default function Display({ type, data }) {
  const { backgroundColor } = useContext(themeContext)

  return (
    <div className='Display'>
      {type} is at&nbsp;

      <span
        style={{ ...getStyle(data), backgroundColor }}
        className='points'>{data}
      </span>
    </div>
  )
}
