import React, { FC, useState } from 'react'

export type CityType = {
  title: string
  value: number
}

export type CustomSelectPropsType = {
  cities: CityType[]
  value: string
  onClick: (value: string) => void
}

export const CustomSelect: FC<CustomSelectPropsType> = (props) => {
  /*const onChangeHandler = (e: FormEventHandler<HTMLDivElement>) => {
    props.onChange(e.)
  }*/
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const onClickHandler = () => setCollapsed(!collapsed)
  return (
    <div style={{ 'border': '1px solid black', 'width': '80px', 'textAlign': 'center' }}>
      <div style={{ 'border': '1px solid black', 'backgroundColor': 'grey' }}
           onClick={onClickHandler}
      >{props.value}</div>
      {
        !collapsed &&
        props.cities.map(city => {
          const onClickHandler = () => {
            props.onClick(city.title)
            setCollapsed(!collapsed)
          }
          return (
            <div style={{ 'border': '1px solid black' }}
                 key={city.value}
                 onClick={onClickHandler}
            >{city.title}</div>
          )
        })
      }
    </div>
  )
}