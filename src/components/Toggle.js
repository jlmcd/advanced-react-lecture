import React, {useState} from 'react'
import StylesHoc from './StylesHoc'

const Toggle = (props) => {
  const [on, setOn] = useState(false)

  return (
    <div>
      {on && props.children}
      <button style={props.style} onClick={() => setOn(prev => !prev)}>Show/Hide</button>
    </div>
  )
}

export default StylesHoc(Toggle)