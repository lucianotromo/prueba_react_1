import './App.css'
import Navbar from './components/Navbar'
import MiApi from './components/MiApi'
import { useEffect } from 'react'

function App() {

  return (
      <div>
        <Navbar></Navbar>
        <div className='card-container'>
        <MiApi></MiApi>
        </div>
      </div>
  )
}

export default App
