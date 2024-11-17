import { Canvas } from '@react-three/fiber'
import './App.css'
import Scene from './components/Scene'
import Configurator from './components/Configurator'

function App() {

  return (
    <div className='App'>
      <Canvas>
        <color attach="background" args={['#101010']} />
        <Scene />
      </Canvas>
      <Configurator />
    </div>
  )
}

export default App
