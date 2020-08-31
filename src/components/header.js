import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.div`
  background: var(--white);
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  height: 80px;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  h1 {
    font-size: 14px;
  }
  .dark-mode {
    margin-top: 10px;
    .moon {
      transform: rotate(-25deg);
      display: inline-flex;
      margin-right: 10px;
    }
    p {
      font-size: 12px;
      font-weight: 600px;
    }
  }
`

const Header = () => {
  const handlerDarkMode = () => {}
  return (
    <HeaderStyled>
      <h1>Where in the world? </h1>
      <div className='dark-mode'>
        <p onClick={handlerDarkMode}>
          <span className='moon'>
            <i className='far fa-moon'></i>
            {/*<i class='fas fa-moon'></i>*/}
          </span>
          Dark Mode
        </p>
      </div>
    </HeaderStyled>
  )
}

export default Header
