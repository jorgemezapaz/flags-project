import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const CountryDetailStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  background: var(--background);
  padding: 4em 2em;
  justify-content: center;

  .country-container {
    width: 264px;
    text-align: left;
    border-radius: 5px;
    box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
    overflow: hidden;
    img {
      height: 160px;
      object-fit: cover;
      width: 100%;
    }
    .details {
      padding: 1.5em;
    }
    h2 {
      margin: 0;
      margin-bottom: 1rem;
      font-size: 18px;
      font-weight: 700;
    }
    p {
      font-size: 0.9em;
      margin-bottom: 0.2rem;
    }
  }
`

const CountryDetail = ({ match }) => {
  const countryDetail = useSelector((state) => state.countryDetail)
  const dispatch = useDispatch()
  const findCountryById = (id) => {
    dispatch({
      type: 'GET_COUNTRY_BY_ID',
      payload: id,
    })
  }
  useEffect(() => {
    if (
      countryDetail?.numericCode === undefined ||
      (countryDetail.numericCode !== undefined &&
        countryDetail.numericCode !== match.params.id)
    ) {
      findCountryById(match.params.id)
    }
  }, [])

  console.log('render -> ', countryDetail)
  return (
    <CountryDetailStyled>
      {!countryDetail && <h1>A ocurrido un error </h1>}

      {countryDetail && (
        <div className='country-container '>
          <img src={countryDetail.flag} alt={countryDetail.name} />
          <div className='details'>
            <h2>{countryDetail.name}</h2>
            <p>
              <b>Population: </b>
              {countryDetail.population}
            </p>
            <p>
              <b>Region: </b>
              {countryDetail.region}
            </p>
            <p>
              <b>Capital: </b>
              {countryDetail.capital}
            </p>
          </div>
        </div>
      )}
    </CountryDetailStyled>
  )
}

export default CountryDetail
