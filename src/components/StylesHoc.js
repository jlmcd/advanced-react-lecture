import React, {Component} from 'react'

const styles = {
  default: {
    color: '#0f0f0f',
    background: 'linear-gradient(to bottom, #98989877, #d8d8d8 65%, #ababab33 100%',
    borderRadius: '4px',
    padding: '.4rem 1rem',
    border: '1px solid #d8d8d8ab',
    outline: 'none',
    fontSize: '1rem'
  },
  disabled: {
    opacity: '.5'
  }
}

const HoC = BaseComponent =>
  class Hoc extends Component {
    // Here we would declare data, or methods we want to encapsulate for reuse and pass them along as props
    constructor() {
      super()
      this.state = {
        name: 'John'
      }
    }
    render() {
      let style = {...styles.default}
      if (this.props.disabled) style = {...style, ...styles.disabled}
      return (
        <BaseComponent
          {...this.props}
          name={this.state.name}
          style={style}
        />
      )
    }
  }
  
export default HoC
