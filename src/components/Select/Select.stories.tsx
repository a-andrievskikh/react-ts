import React, { useState } from 'react'
import { Select } from './Select'

export default {
  title: 'Select Stories',
  component: Select,
}

export const ControlledSelect = () => {
  const [selectValue, setSelectValue] = useState<string | undefined>(undefined)
  return (
    <Select value={selectValue} onChange={setSelectValue} />
  )
}
