import React, { useState } from 'react'
import { Input } from './Input'

export default {
  title: 'Input Stories',
  component: Input,
}

export const ControlledModeWithTrackingValue = () => {

  return (
    <Input value={'Controlled'} />
  )
}


export const ControlledModeWithFixedValue = () => <Input value={'Controlled'} />