import React, { ChangeEvent, useRef, useState } from 'react'

export const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState<string>('')

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

  const onClickHandler = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }

  return (
    <>
      <input onChange={onChangeInputHandler} />{` output: ${value}`}
      <hr />
      <input ref={inputRef} />
      <button onClick={onClickHandler}>Save
      </button>
      {` actual value: ${value}`}
    </>
  )
}
