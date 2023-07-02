import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { Accordion } from './Accordion'

export default {
  title: 'Accordion Stories',
  component: Accordion,
}

const callBack = action('collapsed or not collapsed')

export const CollapsedMode = () => {
  return (
    <Accordion titleValue={'Menu'}
               accordionCollapsed={true}
               setAccordionCollapsed={callBack} />
  )
}
export const UncollapsedMode = () => {
  return (
    <Accordion titleValue={'Menu'}
               accordionCollapsed={false}
               setAccordionCollapsed={callBack} />
  )
}

export const ModeChanging = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true)
  return (
    <Accordion titleValue={'Menu'}
               accordionCollapsed={collapsed}
               setAccordionCollapsed={() => setCollapsed(!collapsed)} />
  )

}