import React from 'react'
import { UncontrolledOnOff } from './UncontrolledOnOff'
import { action } from '@storybook/addon-actions'

export default {
  title: 'UncontrolledOnOff Stories',
  component: UncontrolledOnOff,
}

const callBack = action('on or off clicked!')

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callBack} />
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callBack} />