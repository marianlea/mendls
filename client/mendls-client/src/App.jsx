import { useState } from 'react'
import './App.css'
import PastriesList from './PastriesList'
import { useEffect } from 'react'
import Pastries from './utils/mendls_api'

function App() {

  const [pastries, setPastries] = useState([])
  
  // useEffect(()=>{
  //   Pastries.all()
  //     .then(console.log(pastries))
  // }, [])

  return (
    <main>
      <PastriesList pastries={pastries} />
    </main>
  )
}

export default App
