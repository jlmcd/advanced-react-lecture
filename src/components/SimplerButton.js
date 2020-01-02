import React from 'react'
// import StylesHoc from '../HOC/StylesWrapper'
import StylesHoc from './StylesHoc'

const SimplerButton = (props) => {
  return (
    <button style={props.style}>Simple Button</button>
  )
}

export default StylesHoc(SimplerButton)