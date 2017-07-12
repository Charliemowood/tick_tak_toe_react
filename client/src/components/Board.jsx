import React from 'react'
import Squares from "./Squares.jsx"

export const Board = ( props ) => {
  if(!props) return null
  return (
    <Squares save={props.save} gc={ props }></Squares>
  )
}
