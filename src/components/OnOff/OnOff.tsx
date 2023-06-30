import React from 'react'

type OnOffPropsType = {
  on: boolean
  setOn: (on: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

  const buttonStyle = {
    padding: '3px',
    width: '30px',
    height: '20px',
    borderRadius: '5px',
    border: '1px solid black',
    cursor: 'pointer',
  }

  const onColor = { backgroundColor: props.on ? 'lime' : '' }
  const offColor = { backgroundColor: !props.on ? 'red' : '' }

  const indicatorStyle = {
    marginLeft: '5px',
    width: '10px',
    height: '10px',
    borderRadius: '10px',
    border: '1px solid black',
    display: 'inline-block',
    backgroundColor: props.on ? 'lime' : 'red',
  }

  return (
    <div>
      <button style={{ ...buttonStyle, ...onColor }} onClick={() => props.setOn(true)}>On</button>
      <button style={{ ...buttonStyle, ...offColor }} onClick={() => props.setOn(false)}>Off</button>
      <div style={indicatorStyle}></div>
    </div>
  )
}