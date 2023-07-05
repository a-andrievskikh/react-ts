import React, { useState } from 'react'
import { CustomSelect } from './CustomSelect'

export default {
  title: 'CustomSelect Stories',
  component: CustomSelect,
}

export const ControlledCustomSelect = () => {
  const [customSelectValue, setCustomSelectValue] = useState<string>('Select')
  const cities = [
    { title: 'Moscow', value: 1 },
    { title: 'London', value: 2 },
    { title: 'New York', value: 3 },
    { title: 'Tokyo', value: 4 },
  ]
  return (
    <CustomSelect cities={cities} value={customSelectValue} onClick={setCustomSelectValue} />
  )
}
