import React from 'react'
import './App.css'
import { Accordion } from './components/Accordion/Accordion'
import { Rating } from './components/Rating/Rating'
import { OnOff } from './components/OnOff/OnOff'
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion'
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating'

export const App = () => {
  console.log('App Rendering!')
  return (
    <div className="width margin">
      <OnOff />
      <OnOff />
      <OnOff />
      <UncontrolledAccordion titleValue={'Menu'} />
      <UncontrolledAccordion titleValue={'Users'} />
      <hr />
      <UncontrolledRating />
      <UncontrolledRating />
      <UncontrolledRating />
      <UncontrolledRating />
      <UncontrolledRating />
      <UncontrolledRating />

      {/*<Accordion titleValue={'Menu'} collapsed={true} />
      <Accordion titleValue={'Users'} collapsed={false} />

      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />*/}

    </div>
  )
}

type PageTitlePropsType = {
  title: string
}

const PageTitle = (props: PageTitlePropsType) => {
  console.log('AppTitle Rendering!')
  return <h1>{props.title}</h1>
}
