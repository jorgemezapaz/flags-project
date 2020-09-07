import React from 'react'
import styled from 'styled-components'
import RegionList from './region-list'
import SearchCountry from './search-country'
import WrapperStyled from './wrapper'

const ActionListStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  padding: 1rem 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 480px 1fr 200px;
    padding: 1rem 3rem;
  }
`

const ActionsList = () => {
  return (
    <WrapperStyled>
      <ActionListStyled>
        <SearchCountry />
        <span></span>
        <RegionList />
      </ActionListStyled>
    </WrapperStyled>
  )
}

export default ActionsList
