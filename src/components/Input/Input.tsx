import React, { FC } from 'react'

export type InputPropsType = {
  value: string
  onChange?: (value: string) => void
}

export const Input: FC<InputPropsType> = (props) => {
  return (
    <input value={props.value} />
  )
}
