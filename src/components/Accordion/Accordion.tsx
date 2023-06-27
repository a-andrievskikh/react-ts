import React from 'react'

type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {
  debugger;
  console.log('Accordion Rendering!')
  return (
    <div>
      <AccordionTitle title={props.titleValue} />
      {!props.collapsed && <AccordionBody />}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
  debugger;
  console.log('AccordionTitle Rendering!')
  return <h3>{props.title}</h3>
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
