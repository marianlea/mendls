import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import PastriesList from './pages/PastriesList'
import BasketList from './pages/BasketList'
import Pastries from './utils/mendls_api'
import NavBar from './components/NavBar'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Drawer from '@mui/material/Drawer';
import noise from './assets/noise.png';
import { useLocation } from 'react-router-dom'

const drawerWidth = 450;

function App() {
  const [pastries, setPastries] = useState([])
  const savedBasket = JSON.parse(localStorage.getItem('basket'))
  const [basket, setBasket] = useState(savedBasket || [])
  const [isBasketVisible, setIsBasketVisible] = useState(false)
  const location = useLocation()

  
  useEffect(()=>{
    Pastries.all()
      .then(pastries => {
        setPastries(pastries)
      })
  }, [])
    
  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket))
  }, [basket])

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

  function removeItemFromBasket(pastry) {
    setBasket((prev) => prev.filter(item => pastry.id !== item.id ))
  }

  return (
    <div>
      <NavBar 
        setIsBasketVisible={setIsBasketVisible} 
        basket={basket}
        location ={location} 
      />
      <Routes>
        <Route path='/' element={
          <>
            <Homepage />
            <PastriesList pastries={pastries} basket={basket} onBasketChange={addToBasket} />
          </>
        } />
        <Route path='/about' element={<About />} />
      </Routes>
      <Drawer 
        open={isBasketVisible} 
        anchor="right"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            flexShrink: 0,
            backgroundImage: `url(${noise})`, // Add your image path here
            // backgroundRepeat: 'no-repeat',
            // backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundColor: '#FFFAF0'
          },
        }}
      >
        <BasketList basket={basket} onBasketChange={addToBasket} setIsBasketVisible={setIsBasketVisible} removeItemFromBasket={removeItemFromBasket}/>
      </Drawer>
    </div>
  )
}

export default App
