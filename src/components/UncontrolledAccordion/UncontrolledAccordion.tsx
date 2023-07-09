import React, { useReducer, useState } from 'react'
import { reducer, TOGGLE_COLLAPSED } from './reducer'

type UncontrolledAccordionPropsType = {
  titleValue: string
}

export const UncontrolledAccordion = React.memo((props: UncontrolledAccordionPropsType) => {
  // const [collapsed, setCollapsed] = useState<boolean>(false)
  const [state, dispatch] = useReducer(reducer, { collapsed: false })

  return (
    <div>
      {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)} />*/}
      <AccordionTitle title={props.titleValue} onClick={() => dispatch({ type: TOGGLE_COLLAPSED })} />
      <button onClick={() => dispatch({ type: TOGGLE_COLLAPSED })}>Toggle List</button>
      {!state.collapsed && <AccordionBody />}
    </div>
  )
})

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

const AccordionTitle = React.memo((props: AccordionTitlePropsType) => {
  console.log('AccordionTitle Rendering!')
  return (
    <h3 onClick={() => props.onClick()}>
      {props.title}
    </h3>
  )
})

const AccordionBody = React.memo(() => {
  console.log('AccordionBody Rendering!')
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
})
