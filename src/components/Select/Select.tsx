import React, { ChangeEvent, FC } from 'react'

export type SelectPropsType = {
  value: string | undefined
  onChange: (value: string | undefined) => void
}

export const Select: FC<SelectPropsType> = (props) => {
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    props.onChange(e.currentTarget.value)
  }
  return (
    <select value={props.value}
            onChange={onChangeHandler}
    >
      <option>none</option>
      <option value="1">Moscow</option>
      <option value="2">New York</option>
      <option value="3">London</option>
    </select>
  )
}