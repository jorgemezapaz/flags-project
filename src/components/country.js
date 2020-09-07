import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const CountryStyled = styled.div`
  text-align: left;
  border-radius: 5px;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);

  cursor: pointer;
  &:hover .details {
    border-radius: 0 0 5px 5px;
    border: 1px solid var(--black);
    border-top: none;
  }
  img {
    height: 160px;
    object-fit: cover;
    width: 100%;
    vertical-align: top;
    border-radius: 5px 5px 0 0;
  }
  .details {
    padding: 1.5em;
    border: 1px solid transparent;
    border-top: none;
    transition: 0.3s;
    background: var(--white);
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

const Country = ({ id, flag, name, population, region, capitale }) => {
  let history = useHistory()

  const getDetail = () => {
    history.push(`/country/${id}`)
  }
  return (
    <CountryStyled onClick={getDetail}>
      <img loading='lazy' src={flag} alt={name} />
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
