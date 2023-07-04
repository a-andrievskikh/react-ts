import React, { useState } from 'react'
import { Input } from './Input'

export default {
  title: 'Input Stories',
  component: Input,
}

export const ControlledInput = () => {
  const [value, setValue] = useState<string>('')
  return (
    <Input value={value} onChange={setValue} />
  )
}


// export const ControlledModeWithFixedValue = () => <Input value={'Controlled'} />