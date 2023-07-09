import React, { useState } from 'react'

type PropsType = {
  onChange: (on: boolean) => void
  defaultOn?: boolean
}

export const UncontrolledOnOff = React.memo((props: PropsType) => {

  const [on, setOn] = useState<boolean>(props.defaultOn ? props.defaultOn : false)

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

  const onClickHandler = () => {
    setOn(true)
    props.onChange(true)
  }
  const offClickHandler = () => {
    setOn(false)
    props.onChange(false)
  }

  return (
    <div>
      <button style={{ ...buttonStyle, ...onColor }} onClick={onClickHandler}>On</button>
      <button style={{ ...buttonStyle, ...offColor }} onClick={offClickHandler}>Off</button>
      <div style={indicatorStyle}></div>
    </div>
  )
})