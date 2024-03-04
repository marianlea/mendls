import { useState } from 'react'
import './App.css'
import PastriesList from './PastriesList'
import { useEffect } from 'react'
import Pastries from './utils/mendls_api'

function App() {

  const [pastries, setPastries] = useState([])
  const [basket, setBasket] = useState([])
  
  useEffect(()=>{
    Pastries.all()
      .then(setPastries)
  }, [])

  function addToBasket(pastry) {
    setBasket([...basket, pastry])
  }
  console.log(basket);

  return (
    <main>
      <PastriesList pastries={pastries} onBasketChange={addToBasket} />
    </main>
  )
}

export default App
