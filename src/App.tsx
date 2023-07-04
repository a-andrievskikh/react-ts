import React, { useState } from 'react'
import './App.css'
import { Accordion } from './components/Accordion/Accordion'
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion'
import { Rating, RatingValueType } from './components/Rating/Rating'
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating'
import { OnOff } from './components/OnOff/OnOff'
import { UncontrolledOnOff } from './components/UncontrolledOnOff/UncontrolledOnOff'
import { UncontrolledInput } from './components/UncontrolledInput/UncontrolledInput'
import { Input } from './components/Input/Input'

export const App = () => {
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [on, setOn] = useState<boolean>(true)
  const [value, setValue] = useState<string>('')

  return (
    <div className="width margin">


      <Input value={value} onChange={setValue} />
      <hr />
      <UncontrolledInput />

      <Accordion titleValue={'Users'}
        // onClick={() => setAccordionCollapsed(!accordionCollapsed)}
                 accordionCollapsed={accordionCollapsed}
                 setAccordionCollapsed={setAccordionCollapsed}
      />
      <UncontrolledAccordion titleValue={'Menu'} />
      <hr />

      <Rating value={ratingValue} onClick={setRatingValue} />
      <UncontrolledRating onChange={() => {}} />

      <hr />
      <OnOff on={on} setOn={setOn} />
      <UncontrolledOnOff onChange={setOn} />{on + ''}

    </div>
  )
}
