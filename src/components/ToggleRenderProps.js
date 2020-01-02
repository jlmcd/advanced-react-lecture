import React, {useState} from 'react'
import StylesHoc from './StylesHoc'

const ToggleRenderProps = (props) => {
  const [on, setOn] = useState(false)
  const {render, style} = props
  return (
    <div>
      {render({on, setOn, style})}
    </div>
  )
}

export default StylesHoc(ToggleRenderProps)