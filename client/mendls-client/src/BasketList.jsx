import PastryItem from "./PastryItem";
import './BasketList.css'

export default function BasketList({ basket, onBasketChange }) {

  function handleQuantityChange(e, pastry) {
    onBasketChange({...pastry, quantity: e.target.value})
  }

  return (
    <aside className="basket-list">
      <ul>
          {basket.map(pastry =>{
              return !!pastry.quantity && <li key={`${pastry.id}-basket`} >
                  <PastryItem pastry={pastry} />
                  <input
                      type="number"
                      defaultValue={basket.find(item => item.id === pastry.id)?.quantity || null}
                      onChange={(e) => handleQuantityChange(e, pastry)}
                      name="quantity"
                      min="1"
                  />
                  <button>remove</button>
              </li>
          })}
      </ul>
    </aside>
  )
}