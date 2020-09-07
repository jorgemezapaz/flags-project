import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const SearchCountryStyled = styled.label`
  position: relative;
  display: inline-flex;
  background: var(--white);
  align-items: center;
  padding: 0 1rem;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  i {
    margin-right: 1em;
    color: #c4c4c4;
  }
  input {
    background: var(--white);
    color: var(--black);
    flex: 1;
    height: 48px;
    line-height: 48px;
    border: none;
    outline: 0;
    &::-webkit-input-placeholder {
      color: #c4c4c4;
    }
  }
  .reset-filter {
    position: absolute;
    right: 0.5em;
    top: 1em;
    border-radius: 50%;
    border: none;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
    outline: 0;
  }
`

const SearchCountry = () => {
  const dispatch = useDispatch()
  const countryNameSearched = useSelector((state) => state.countryNameSearched)
  const dispatchHandler = (textInput) => {
    dispatch({
      type: 'GET_COUNTRY_BY_NAME',
      payload: textInput,
    })
  }

  const searchHandler = (event) => {
    const inputText = event.target.value
    console.log(inputText)
    if (inputText === undefined) {
      dispatchHandler('')
    } else {
      dispatchHandler(inputText)
    }
  }
  return (
    <SearchCountryStyled>
      {countryNameSearched.trim() !== '' && (
        <i
          className='reset-filter far fa-times-circle'
          onClick={searchHandler}
        ></i>
      )}
      <i className='fas fa-search'></i>
      <input
        type='text'
        onChange={searchHandler}
        placeholder='Search for a country'
        value={countryNameSearched}
      />
    </SearchCountryStyled>
  )
}

export default SearchCountry
