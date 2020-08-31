import React, { useEffect } from 'react'
import styled from 'styled-components'
import Country from './country'
import { useSelector, useDispatch } from 'react-redux'

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  background: var(--background);
  padding: 4em 2em;
  justify-content: center;
`

const CountryList = () => {
  const dispatch = useDispatch()
  let countryList = []
  const countryListData = useSelector((state) => state.countryList)
  const country = useSelector((state) => state.countryDetail)
  const countryListByRegion = useSelector((state) => state.countryListByRegion)
  const countryListByName = useSelector((state) => state.countryListByName)
  const countryNameSearched = useSelector((state) => state.countryNameSearched)

  if (
    countryListByRegion.length === 0 &&
    countryListByName.length === 0 &&
    countryNameSearched.trim() === ''
  ) {
    countryList = countryListData
  } else if (
    countryListByName.length === 0 &&
    countryNameSearched.trim() === ''
  ) {
    countryList = countryListByRegion
  } else {
    countryList = countryListByName
  }

  const findCountryById = (id) => {
    dispatch({
      type: 'GET_COUNTRY_BY_ID',
      payload: id,
    })
  }

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((json) => json.json())
      .then((list) => {
        dispatch({
          type: 'SET_COUNTRY_LIST',
          payload: list,
        })
      })
      .catch(() => {
        console.log('Error al obtener los paises')
      })
  }, [])

  return (
    <CountryListStyled>
      {countryNameSearched.trim() !== '' && countryList.length === 0 && (
        <p>No se encontraron resultados</p>
      )}
      {countryNameSearched.trim() === '' && countryList.length === 0 && (
        <p>
          <b>Loading....</b>
        </p>
      )}
      {countryList.length > 0 &&
        countryList.map(
          ({ numericCode, flag, name, population, region, capital }) => (
            <Country
              key={numericCode}
              id={numericCode}
              flag={flag}
              name={name}
              population={population}
              region={region}
              capitale={capital}
              getCountry={findCountryById}
            />
          )
        )}
    </CountryListStyled>
  )
}

export default CountryList
