import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { Accordion, AccordionPropsType } from './Accordion'
import { Story } from '@storybook/react'

export default {
  title: 'Accordion Stories',
  component: Accordion,
}

const callBack = action('collapsed or not collapsed')

const Template: Story<AccordionPropsType> = (args: AccordionPropsType) => <Accordion {...args} />

const propsCallback = {
  setAccordionCollapsed: callBack,
}

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
  ...propsCallback,
  titleValue: 'Menu',
  accordionCollapsed: true,
}

export const UncollapsedMode = Template.bind({})
UncollapsedMode.args = {
  ...propsCallback,
  titleValue: 'Users',
  accordionCollapsed: false,
}

export const ModeChanging = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true)
  return (
    <Accordion titleValue={'Menu'}
               accordionCollapsed={collapsed}
               setAccordionCollapsed={() => setCollapsed(!collapsed)} />
  )

}