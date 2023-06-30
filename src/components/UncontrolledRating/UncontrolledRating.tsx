import React, { useState } from 'react'

type RatingPropsType = {
  // value: 0 | 1 | 2 | 3 | 4 | 5
}

export const UncontrolledRating = (props: RatingPropsType) => {

  const [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)

  return (
    <div>
      <Star selected={value > 0} setValue={() => setValue(1)} />
      <Star selected={value > 1} setValue={() => setValue(2)} />
      <Star selected={value > 2} setValue={() => setValue(3)} />
      <Star selected={value > 3} setValue={() => setValue(4)} />
      <Star selected={value > 4} setValue={() => setValue(5)} />
      <button onClick={() => setValue(1)} disabled={value > 0}>1</button>
      <button onClick={() => setValue(2)} disabled={value > 1}>2</button>
      <button onClick={() => setValue(3)} disabled={value > 2}>3</button>
      <button onClick={() => setValue(4)} disabled={value > 3}>4</button>
      <button onClick={() => setValue(5)} disabled={value > 4}>5</button>
      <button onClick={() => setValue(0)} disabled={value > 5}>Reset</button>
    </div>
  )
}

type StarPropsType = {
  selected: boolean
  setValue: () => void
}

export const Star = (props: StarPropsType) => {

  return (
    <span onClick={() => props.setValue()}>
      {props.selected ? <strong>Star </strong> : 'Star '}
    </span>
  )
}
