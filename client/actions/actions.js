import * as types from '../constants/actionTypes';

export const addSearch = (userInput) => ({
  type: types.ADD_SEARCH,
  payload: userInput,
});

export const addLocations = (locations) => ({
  type: types.ADD_LOCATIONS,
  payload: locations,
});

export const setCurrLocation = (currLocation) => ({
  type: types.SET_CURR_LOCATION,
  payload: currLocation
})

export const selectMarker = (id) => ({
  type: types.SELECT_MARKER,
  payload: id
})

export const deselect = () => ({
  type: types.DESELECT,
  payload: null
})

export const setLogin = (bool) => ({
  type: types.SET_LOGIN,
  payload: bool
})

export const setMarkers = (markers) => ({
  type: types.SET_MARKERS,
  payload: markers
})
