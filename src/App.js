import React, { useState, useEffect } from 'react'
import './App.css'
import CountryList from './components/country-list'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'
import ActionsList from './components/actions-list'
import Header from './components/header'
import CountryDetail from './components/country-detail'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const initialState = {
  countryList: [],
  countryListByRegion: [],
  countryListByName: [],
  countryDetail: {},
  regionSelected: '',
  countryNameSearched: '',
}

const store = createStore(reducer, initialState)

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  const changeMode = () => setDarkMode(!darkMode)

  function changeMedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, [])

  return (
    <main className={mainClass}>
      <Provider store={store}>
        <Router>
          <Header darkMode={changeMode} />
          <Switch>
            <Route exact path='/'>
              <ActionsList />
              <CountryList />
            </Route>
            <Route path='/country/:id' component={CountryDetail} />
          </Switch>
        </Router>
      </Provider>
    </main>
  )
}

export default App
