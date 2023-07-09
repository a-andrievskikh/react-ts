import React, { FC, useState, KeyboardEvent, useEffect } from 'react'
import s from './CustomSelectStudy.module.css'

export type CityType = {
  title: string
  value: string
}

export type CustomSelectStudyPropsType = {
  value?: any
  onChange: (value: any) => void
  cities: CityType[]
}

export const CustomSelectStudy: FC<CustomSelectStudyPropsType> = React.memo((props) => {
  const [active, setActive] = useState<boolean>(false)
  const [hoveredElementValue, setHoveredElementValue] = useState<string>(props.value)
  const selectedCity = props.cities.find(city => city.value === props.value)
  const hoveredCity = props.cities.find(city => city.value === hoveredElementValue)

  useEffect(() => {
    setHoveredElementValue(props.value)
  }, [props.value])

  const toggleCities = () => setActive(!active)
  const onCityClick = (value: any) => {
    props.onChange(value)
    toggleCities()
  }

  const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let i = 0; i < props.cities.length; i++) {
        if (props.cities[i].value === hoveredElementValue) {
          const pretendentElement = e.key === 'ArrowDown' ? props.cities[i + 1] : props.cities[i - 1]
          if (pretendentElement) {
            props.onChange(pretendentElement.value)
            return
          }
        }
      }
      if (!selectedCity) {
        props.onChange(props.cities[0].value)
      }
    }
    if (e.key === 'Enter' || e.key === 'Escape') {
      setActive(false)
    }
  }

  return (
    <div className={s.select}
         onKeyDown={onKeyDownHandler}
         tabIndex={0}
    >
      <span className={s.main}
            onClick={toggleCities}>{selectedCity && selectedCity.title}</span>
      {
        active &&
        <div className={s.items}>
          {
            props.cities.map(city => {
                return (
                  <div className={s.item + ' ' + (hoveredCity === city ? s.selected : '')}
                       key={city.value}
                       onClick={() => onCityClick(city.value)}
                       onMouseEnter={() => setHoveredElementValue(city.value)}
                  >
                    {city.title}
                  </div>
                )
              },
            )
          }
        </div>
      }
    </div>
  )
})