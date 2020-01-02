import {useState} from 'react'
import StylesHoc from './StylesHoc'

const Toggle = (props) => {
  const [on, setOn] = useState(false)
  const {children, style} = props
  return children({on, setOn, style})
}

export default StylesHoc(Toggle)