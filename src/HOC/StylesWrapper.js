import React from 'react'

const styles = {
  default: {
    color: '#0f0f0f',
    background: '#989898',
    borderRadius: '7px',
    padding: '.4rem 1rem',
    border: 'none',
    outline: 'none'
  },
  disabled: {
    opacity: '.5'
  }
}

const translateProps = props => {
  let style = {...styles.default}
  if(props.disabled) {
    style = {...style, ...styles.disabled}
  }
  const newProps = {...props, style}
  return newProps
}

export default (WrappedComponent) => {
  return function WrappedRender(args) {
    return WrappedComponent(translateProps(args))
  }
}