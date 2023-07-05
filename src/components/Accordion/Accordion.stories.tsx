import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { Accordion } from './Accordion'

export default {
  title: 'Accordion Stories',
  component: Accordion,
}

const callBack = action('collapsed or not collapsed')
const onClickCallBack = action('some item was clicked')

const users = [
  { title: 'Mike', value: 1 },
  { title: 'Bob', value: 2 },
  { title: 'John', value: 3 },
  { title: 'Mira', value: 4 },
]

export const CollapsedMode = () => {
  return (
    <Accordion titleValue={'Menu'}
               accordionCollapsed={true}
               setAccordionCollapsed={callBack}
               items={[]}
               onClick={onClickCallBack}
    />
  )
}
export const UncollapsedMode = () => {
  return (
    <Accordion titleValue={'Users'}
               accordionCollapsed={false}
               setAccordionCollapsed={callBack}
               items={users}
               onClick={onClickCallBack}

    />
  )
}

export const ModeChanging = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true)
  return (
    <Accordion titleValue={'Menu'}
               accordionCollapsed={collapsed}
               setAccordionCollapsed={() => setCollapsed(!collapsed)}
               items={users}
               onClick={onClickCallBack}
    />
  )

}