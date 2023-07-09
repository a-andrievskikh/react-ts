import React, { ChangeEvent, FC } from 'react'

export type InputPropsType = {
  value: string
  onChange: (value: string) => void
}

export const Input: FC<InputPropsType> = React.memo((props) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => props.onChange(e.currentTarget.value)
    return (
      <input value={props.value}
             onChange={onChangeHandler}
      />
    )
  },
)
