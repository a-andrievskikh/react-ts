import React, { useState } from 'react'
import './App.css'
import { Accordion } from './components/Accordion/Accordion'
import { Rating, RatingValueType } from './components/Rating/Rating'
import { OnOff } from './components/OnOff/OnOff'
import { Input } from './components/Input/Input'
import { Checkbox } from './components/Checkbox/Checkbox'
import { Select } from './components/Select/Select'
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion'
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating'
import { UncontrolledOnOff } from './components/UncontrolledOnOff/UncontrolledOnOff'
import { UncontrolledInput } from './components/UncontrolledInput/UncontrolledInput'
import { action } from '@storybook/addon-actions'
import { CustomSelect } from './components/CustomSelect/CustomSelect'

export const App = () => {
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [on, setOn] = useState<boolean>(true)
  const [value, setValue] = useState<string>('')
  const [isChecked, setIsChecked] = useState<boolean>(true)
  const [selectValue, setSelectValue] = useState<string | undefined>(undefined)
  const [customSelectValue, setCustomSelectValue] = useState<string>('Select')

  const users = [
    { title: 'Mike', value: 1 },
    { title: 'Bob', value: 2 },
    { title: 'John', value: 3 },
    { title: 'Mira', value: 4 },
  ]

  const onClickCallBack = action(`some item was clicked`)

  const cities = [
    { title: 'Moscow', value: 1 },
    { title: 'London', value: 2 },
    { title: 'New York', value: 3 },
    { title: 'Tokyo', value: 4 },
  ]

  return (
    <div className="width margin">

      <CustomSelect cities={cities}
                    value={customSelectValue}
                    onClick={setCustomSelectValue}
      />
      <hr />
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
                 items={users}
                 onClick={onClickCallBack}
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
