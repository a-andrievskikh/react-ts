import React, { useState } from 'react'

type UncontrolledAccordionPropsType = {
  titleValue: string
}

export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)

  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        onClick={() => setCollapsed(!collapsed)}
      />
      <button onClick={() => setCollapsed(!collapsed)}>Toggle List</button>
      {!collapsed && <AccordionBody />}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
  debugger;
  console.log('AccordionTitle Rendering!')
  return (
    <h3 onClick={() => props.onClick()}>
      {props.title}
    </h3>
  )
}

const AccordionBody = () => {
  console.log('AccordionBody Rendering!')
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}
