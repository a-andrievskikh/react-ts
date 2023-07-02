import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { OnOff } from './OnOff'

export default {
  title: 'OnOff Stories',
  component: OnOff,
}

const callBack = action('on or off clicked')

export const OnMode = () => <OnOff on={true} setOn={callBack} />
export const OffMode = () => <OnOff on={false} setOn={callBack} />

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)
  return <OnOff on={value} setOn={setValue} />

}