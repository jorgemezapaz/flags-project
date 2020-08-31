import React from 'react'
import './App.css'
import CountryList from './components/country-list'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'
import ActionsList from './components/actions-list'
import Header from './components/header'

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
  return (
    <Provider store={store}>
      <Header />
      <ActionsList />
      <CountryList />
    </Provider>
  )
}

export default App
