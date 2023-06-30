import React from 'react'

type AccordionPropsType = {
  titleValue: string
  accordionCollapsed: boolean
  setAccordionCollapsed: (accordionCollapsed: boolean) => void
}

export const Accordion = (props: AccordionPropsType) => {

  return (
    <div>
      <AccordionTitle title={props.titleValue}
                      accordionCollapsed={props.accordionCollapsed}
                      onClick={props.setAccordionCollapsed} />
      <button onClick={() => props.setAccordionCollapsed(!props.accordionCollapsed)}>Toggle List</button>
      {!props.accordionCollapsed && <AccordionBody />}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  accordionCollapsed: boolean
  onClick: (accordionCollapsed: boolean) => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
  return (
    <h3 onClick={() => props.onClick(!props.accordionCollapsed)}>
      {props.title}
    </h3>
  )
}

const AccordionBody = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}
