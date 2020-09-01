import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const RegionFilterListStyled = styled.select`
  height: 48px;
  border: none;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  outline: 0;
`

const filteByRegion = (regionName) => {
  return {
    type: 'GET_COUNTRY_LIST_BY_REGION',
    payload: regionName,
  }
}

const RegionList = () => {
  const dispacth = useDispatch()
  const regionHandler = (event) => {
    dispacth(filteByRegion(event.target.value))
  }
  return (
    <RegionFilterListStyled onChange={regionHandler}>
      <option value=''>Filter by Region</option>
      <option value='Africa'>Africa</option>
      <option value='Europe'>Europe</option>
      <option value='Americas'>Americas</option>
      <option value='Asia'>Asia</option>
      <option value='Oceania'>Oceania</option>
    </RegionFilterListStyled>
  )
}

export default RegionList
