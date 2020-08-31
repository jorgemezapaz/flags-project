import React from 'react'
import styled from 'styled-components'
import RegionList from './region-list'
import SearchCountry from './search-country'

const ActionListStyled = styled.div`
  display: grid;
  grid-template: 1fr;
  grid-row-gap: 40px;
  padding: 1rem 1rem;
`

const ActionsList = () => {
  return (
    <ActionListStyled>
      <SearchCountry />
      <RegionList />
    </ActionListStyled>
  )
}

export default ActionsList
