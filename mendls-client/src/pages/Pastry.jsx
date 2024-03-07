import { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import { getPastryImage } from "../helpers";
import './Pastry.css'


export default function Pastry({ pastry, basket, onBasketChange }) {

  const [formQuantities, setFormQuantities] = useState({});

  useEffect(() => {
    // Initialize formQuantities with quantities from basket
    const initialQuantities = {};
    basket.forEach(item => {
        initialQuantities[item.id] = item.quantity || null;
    });
    setFormQuantities(initialQuantities);
  }, [basket]);

  function handleFormChange(e, pastry) {
    const id = pastry.id;
    const value = e.target.value;
    setFormQuantities(prev => ({
        ...prev,
        [id]: value
    }));
  }

  function handleBasketChange(e, pastry) {
    e.preventDefault();
    const id = pastry.id;
    const quantity = formQuantities[id];
    if (!quantity || quantity < 1) {
        alert('Enter a valid item quantity');
        return;
    }
    onBasketChange({...pastry, quantity: Number(quantity)});
}

  return (
    <section className="ind-pastry">
      <h5>PASTRIES</h5>
      <div className="ui-card">
        <div className="item">
            <img src={getPastryImage(pastry)} alt="" />
            <div className="details">
              <p className="title">{pastry.title}</p>
              <p className="price">{pastry.price}</p>
              <p className="description">{pastry.description}</p>
              <form action="" onSubmit={(e) => handleBasketChange(e, pastry)}>
                <input 
                  type="number"
                  value={formQuantities[pastry.id] || ''}
                  onChange={(e) => handleFormChange(e, pastry)}
                  name="quantity"
                  min="1" 
                />
                <button>add to basket</button>
              </form>
            </div>
        </div>
      </div>
      <Footer color='#FFFAF0' image='none' visible='visible' />
    </section>
  )
}