import React, { useState } from 'react'

export const UncontrolledOnOff = () => {

  const [on, setOn] = useState<boolean>(true)

  const buttonStyle = {
    padding: '3px',
    width: '30px',
    height: '20px',
    borderRadius: '5px',
    border: '1px solid black',
    cursor: 'pointer',
  }

  const onColor = { backgroundColor: on ? 'lime' : '' }
  const offColor = { backgroundColor: !on ? 'red' : '' }

  const indicatorStyle = {
    marginLeft: '5px',
    width: '10px',
    height: '10px',
    borderRadius: '10px',
    border: '1px solid black',
    display: 'inline-block',
    backgroundColor: on ? 'lime' : 'red',
  }

  return (
    <div>
      <button style={{ ...buttonStyle, ...onColor }} onClick={() => {setOn(true)}}>On</button>
      <button style={{ ...buttonStyle, ...offColor }} onClick={() => {setOn(false)}}>Off</button>
      <div style={indicatorStyle}></div>
    </div>
  )
}