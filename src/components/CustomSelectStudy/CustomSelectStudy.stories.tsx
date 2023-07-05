import React, { useState } from 'react'
import { CustomSelectStudy } from './CustomSelectStudy'
import { action } from '@storybook/addon-actions'

export default {
  title: 'CustomSelectStudy Stories',
  component: CustomSelectStudy,
}

export const BaseExample = () => {
  const [value, setValue] = useState<any>('2')
  const cities = [
    { title: 'Moscow', value: '1' },
    { title: 'London', value: '2' },
    { title: 'New York', value: '3' },
    { title: 'Tokyo', value: '4' },
  ]
  return (
    <>
      <CustomSelectStudy cities={cities} value={value} onChange={setValue} />
    </>
  )
}

export const BaseExampleWithoutValue = () => {
  const [value, setValue] = useState<any>(null)
  const cities = [
    { title: 'Moscow', value: '1' },
    { title: 'London', value: '2' },
    { title: 'New York', value: '3' },
    { title: 'Tokyo', value: '4' },
  ]
  return (
    <>
      <CustomSelectStudy cities={cities} value={value} onChange={setValue} />
    </>
  )
}
