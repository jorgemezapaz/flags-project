import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderStyled = styled.div`
  background: var(--white);
  align-items: center;
  padding: 0 1rem;
  height: 80px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  h1 {
    font-size: 14px;
  }
  .dark-mode {
    margin-top: 10px;
    cursor: pointer;
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
  a {
    text-decoration: none;
    color: var(--dark);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 3em;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 1rem;
    }
  }
`

const Header = ({ darkMode }) => {
  const handlerDarkMode = () => {
    darkMode()
  }
  return (
    <HeaderStyled>
      <Link to='/'>
        <h1>Where in the world? </h1>
      </Link>
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
