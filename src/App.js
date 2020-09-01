import React from 'react'
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
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <ActionsList />
            <CountryList />
          </Route>
          <Route path='/country/:id' component={CountryDetail} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
