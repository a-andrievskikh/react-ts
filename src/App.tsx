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
import { Checkbox } from './components/Checkbox/Checkbox'
import { Select } from './components/Select/Select'

export const App = () => {
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [on, setOn] = useState<boolean>(true)
  const [value, setValue] = useState<string>('')
  const [isChecked, setIsChecked] = useState<boolean>(true)
  const [selectValue, setSelectValue] = useState<string | undefined>('2')


  return (
    <div className="width margin">

      <Select value={selectValue} onChange={setSelectValue} />
      <hr />

      <Checkbox isChecked={isChecked} onChange={setIsChecked} />
      <hr />

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
