import React, { useState } from 'react'

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
  defaultValue?: RatingValueType
  onChange: (value: RatingValueType) => void
}

export const UncontrolledRating = React.memo((props: RatingPropsType) => {

  const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

  return (
    <div>
      <Star selected={value > 0}
            setValue={() => {
              setValue(1)
              props.onChange(1)
            }} />
      <Star selected={value > 1}
            setValue={() => {
              setValue(2)
              props.onChange(2)
            }} />
      <Star selected={value > 2}
            setValue={() => {
              setValue(3)
              props.onChange(3)
            }} />
      <Star selected={value > 3}
            setValue={() => {
              setValue(4)
              props.onChange(4)
            }} />
      <Star selected={value > 4}
            setValue={() => {
              setValue(5)
              props.onChange(5)
            }} />
      <button onClick={() => setValue(1)} disabled={value > 0}>1</button>
      <button onClick={() => setValue(2)} disabled={value > 1}>2</button>
      <button onClick={() => setValue(3)} disabled={value > 2}>3</button>
      <button onClick={() => setValue(4)} disabled={value > 3}>4</button>
      <button onClick={() => setValue(5)} disabled={value > 4}>5</button>
      <button onClick={() => setValue(0)} disabled={value > 5}>Reset</button>
    </div>
  )
})

type StarPropsType = {
  selected: boolean
  setValue: () => void
}

export const Star = React.memo((props: StarPropsType) => {

  return (
    <span onClick={() => props.setValue()}>
      {props.selected ? <strong>Star </strong> : 'Star '}
    </span>
  )
})
