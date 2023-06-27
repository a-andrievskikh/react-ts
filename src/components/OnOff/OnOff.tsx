import React from 'react'

type OnOffPropsType = {
  isOn: boolean
}

export const OnOff = (props: OnOffPropsType) => {
  return (
    <div>
      <button className={props.isOn ? 'green' : 'default'}></button>
      <button className={props.isOn ? 'default' : 'red'}></button>
      <div className={props.isOn ? 'circleOn' : 'circleOff'}></div>
    </div>
  )
}