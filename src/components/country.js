import React from 'react'
import styled from 'styled-components'

const CountryStyled = styled.div`
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
`

const Country = ({
  id,
  flag,
  name,
  population,
  region,
  capitale,
  getCountry,
}) => {
  const getDetail = (event) => {
    getCountry(id)
  }
  return (
    <CountryStyled>
      <img loading='lazy' src={flag} alt={name} onClick={getDetail} />
      <div className='details'>
        <h2>{name}</h2>
        <p>
          <b>Population: </b>
          {population}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capitale}
        </p>
      </div>
    </CountryStyled>
  )
}

export default Country
