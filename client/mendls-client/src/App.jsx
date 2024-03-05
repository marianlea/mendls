import { useState } from 'react'
import './App.css'
import PastriesList from './PastriesList'
import BasketList from './BasketList'
import { useEffect } from 'react'
import Pastries from './utils/mendls_api'
import NavBar from './NavBar'
import Homepage from './Homepage'


function App() {

  const [pastries, setPastries] = useState([])
  // const [basket, setBasket] = useState( typeof savedBasket === 'object' ? savedBasket : [])
  const savedBasket = JSON.parse(localStorage.getItem('basket'))
  const [basket, setBasket] = useState(savedBasket || []);
  
  
  useEffect(()=>{
    Pastries.all()
      .then(pastries => {
        setPastries(pastries)
      })
  }, [])
    
  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket))
  }, [basket])

  // function addToBasket(pastry) {
  //   const existingPastry = basket.filter(item => item.id === pastry.id);
  //   const updatedBasket =
  //     !!existingPastry.length 
  //     ? basket.map(item => {
  //       if (item.id === pastry.id){
  //         return {...existingPastry, ...pastry}
  //       } 
  //       return item
  //     }) 
  //     : [...basket, pastry];
  //     setBasket(updatedBasket)
  // }

  function addToBasket(pastry) {
    const existingPastryIndex = basket.findIndex(item => item.id === pastry.id);
  
    if (existingPastryIndex !== -1) {
      const updatedBasket = basket.map((item, index) => {
        if (index === existingPastryIndex) {
          return {...item, ...pastry};
        }
        return item;
      });
      setBasket(updatedBasket);
    } else {
      setBasket([...basket, pastry]);
    }
  }
  

  return (
    <main>
      <NavBar />
      <Homepage />
      <PastriesList pastries={pastries} basket={basket} onBasketChange={addToBasket} />
      <BasketList basket={basket} onBasketChange={addToBasket} />
    </main>
  )
}

export default App
