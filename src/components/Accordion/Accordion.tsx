import React, { FC } from 'react'

export type ItemType = {
  title: string
  value: any
}

export type AccordionPropsType = {
  titleValue: string
  accordionCollapsed: boolean
  setAccordionCollapsed: (accordionCollapsed: boolean) => void
  items: ItemType[]
  onClick: (value: any) => void
}

export const Accordion: FC<AccordionPropsType> = React.memo((props) => {
    return (
      <div>
        <AccordionTitle title={props.titleValue}
                        accordionCollapsed={props.accordionCollapsed}
                        onClick={props.setAccordionCollapsed} />
        <button onClick={() => props.setAccordionCollapsed(!props.accordionCollapsed)}>Toggle List</button>
        {!props.accordionCollapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
      </div>
    )
  },
)


type AccordionTitlePropsType = {
  title: string
  accordionCollapsed: boolean
  onClick: (accordionCollapsed: boolean) => void
}

const AccordionTitle = React.memo((props: AccordionTitlePropsType) => {
  return (
    <h3 onClick={() => props.onClick(!props.accordionCollapsed)}>
      {props.title}
    </h3>
  )
})

export type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
}

const AccordionBody: FC<AccordionBodyPropsType> = React.memo((props) => {
  return (
    <ul>
      {props.items.map((item, i) => {
        return (
          <li key={i} onClick={() => props.onClick(item.value)}>
            {item.title}
          </li>
        )
      })}
    </ul>
  )
})
