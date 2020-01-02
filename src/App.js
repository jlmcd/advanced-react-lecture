import React from 'react'
import './App.css'
import ComplexButton from './components/ComplexButton'
import SimplerButton from './components/SimplerButton'
import Toggle from './components/Toggle'
import ToggleRenderProps from './components/ToggleRenderProps'
import ToggleRPC from './components/ToggleRPC'

function App() {
  return (
    <div className="App">
      <ComplexButton />
      <SimplerButton />
      <Toggle>
        <h1>What do you do when you see a space man?</h1>
      </Toggle>
      <ToggleRenderProps
        render={({on, setOn, style}) => (
          <div>
            {on && <h1>Park your car, man.</h1>}
            <button style={style} onClick={() => setOn(prev => !prev)}>Show/Hide</button>
          </div>
        )}
      />
      <ToggleRPC>
      {({on, setOn, style}) => (
          <div>
            {on && <h1>Show Me</h1>}
            <button style={style} onClick={() => setOn(prev => !prev)}>Show/Hide</button>
          </div>
        )}
      </ToggleRPC>
    </div>
  )
}

export default App
