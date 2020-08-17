import React, { createContext, useReducer } from "react";

export const ColorContextWrapper = createContext({})

export const UPDATE_COLOR = 'UPDATE_COLOR'

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return action.color
    default:
      return state.color
  }
}

export const ColorContext = props => {

  const [color, dispatch] = useReducer(reducer, 'blue')

  return (
    <ColorContextWrapper.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContextWrapper.Provider>
  )
}
