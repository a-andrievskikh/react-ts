import React, { useState } from 'react'
import { Checkbox } from './Checkbox'

export default {
  title: 'Checkbox Stories',
  component: Checkbox,
}

export const ControlledCheckbox = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true)
  return (
    <Checkbox isChecked={isChecked} onChange={setIsChecked} />
  )
}