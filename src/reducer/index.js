const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_COUNTRY_LIST': {
      return { ...state, countryList: action.payload }
    }
    case 'GET_COUNTRY_BY_ID': {
      const country = state.countryList.find(
        (c) => c.numericCode === action.payload
      )
      return { ...state, countryDetail: country }
    }
    case 'GET_COUNTRY_LIST_BY_REGION': {
      return filterByRegion(state, action.payload)
    }
    case 'GET_COUNTRY_BY_NAME': {
      return filterByName(state, action.payload)
    }
    default: {
      return state
    }
  }
}

const filterByName = (state, countryName) => {
  let searchResult = []
  if ('' === countryName) {
    return {
      ...state,
      countryListByName: [],
      countryNameSearched: countryName,
    }
  } else if (countryName.trim() !== '' && state.regionSelected.trim() !== '') {
    searchResult = state.countryListByRegion.filter((c) =>
      c.name.toLowerCase().includes(countryName.toLowerCase())
    )
  } else {
    searchResult = state.countryList.filter((c) =>
      c.name.toLowerCase().includes(countryName.toLowerCase())
    )
  }

  return {
    ...state,
    countryListByName: searchResult,
    countryNameSearched: countryName,
  }
}

const filterByRegion = (state, regionName) => {
  let coutries = []
  if ('' !== regionName) {
    coutries = state.countryList.filter((c) => c.region.includes(regionName))
  }
  return {
    ...state,
    countryListByRegion: coutries,
    regionSelected: regionName,
  }
}

export default reducer
