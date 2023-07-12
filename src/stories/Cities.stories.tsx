import React, { useCallback, useMemo, useState } from 'react'

export default {
  title: 'Cities',
}

export type CityType = {
  region: string
  cityName: string
  population: number
}

export const Cities = () => {

  const [count, setCount] = useState<number>(0)
  const [cities, setCities] = useState<CityType[]>([
    { region: 'RU', cityName: 'Moscow', population: 13000000 },
    { region: 'RU', cityName: 'Saint-Peterburg', population: 5600000 },
    { region: 'RU', cityName: 'Novosibirsk', population: 1600000 },
    { region: 'RU', cityName: 'Ekaterinburg', population: 1500000 },
    { region: 'RU', cityName: 'Kazan', population: 1300000 },
    { region: 'BY', cityName: 'Minsk', population: 2000000 },
    { region: 'BY', cityName: 'Gomel', population: 530000 },
    { region: 'BY', cityName: 'Mogilev', population: 380000 },
    { region: 'BY', cityName: 'Vitebsk', population: 377000 },
    { region: 'BY', cityName: 'Grodno', population: 370000 },
    { region: 'GB', cityName: 'London', population: 8700000 },
    { region: 'GB', cityName: 'Birmingham', population: 1120000 },
    { region: 'GB', cityName: 'Leeds', population: 1120000 },
    { region: 'GB', cityName: 'Liverpool', population: 506000 },
    { region: 'GB', cityName: 'Sheffild', population: 500000 },
  ])

  console.log(count)
  const allCities = useMemo(() => {
    return cities.map((c, i) => {
      console.log(cities)
      return <li key={i}>{c.region}, {c.cityName}: {c.population}</li>
    })
  }, [cities])

  const rusCities = useMemo(() => {
    return cities.filter(x => {
      return x.region === 'RU'
    }).map((c, i) => {
      console.log(cities)
      return <li key={i}>{c.region}, {c.cityName}: {c.population}</li>
    })
  }, [cities])

  const largestPupulation = useMemo(() => {
    return cities.filter(x => {
      return x.population > 1000000
    }).map((c, i) => {
      console.log(cities)
      return <li key={i}>{c.region}, {c.cityName}: {c.population}</li>
    })
  }, [cities])

  const addCity = () => {
    setCities([...cities, { region: 'MY', cityName: 'New City', population: 2500000 }])
  }

  const onCountHandler = () => {

    setCount(count + 1)
  }
  return (
    <>
      <button onClick={onCountHandler}>{count}</button>
      <ul> Все города:
        {allCities}
      </ul>
      <button onClick={addCity}>Add city</button>
      <ul> Ру города:
        {rusCities}
      </ul>
      <ul> Города больше 1200000 человек:
        {largestPupulation}
      </ul>
    </>
  )

}