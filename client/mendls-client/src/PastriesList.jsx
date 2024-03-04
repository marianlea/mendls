import './PastriesList.css'
import PastryItem from "./PastryItem";
import { useState } from 'react';


export default function PastriesList({ pastries, onBasketChange }) {

    const [formData, setFormData] = useState({pastry: '', quantity:0})

    function handleQuantityChange(e) {
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    function handleBasketChange(e) {
        e.preventDefault()
        onBasketChange(formData)
    }

    return (
        <section className="pastries-list">
            <ul>
                {pastries.map(pastry =>
                    <li key={pastry.id}>
                        <PastryItem pastry={pastry} />
                        <form action="" onSubmit={handleBasketChange}>
                            <input 
                                onChange={handleQuantityChange} type="number" 
                                min="0" 
                                name="quantity" 
                            />
                            <button 
                                onClick={handleQuantityChange} name="pastry" 
                                value={pastry.title}
                            >add to basket
                            </button>
                        </form>
                    </li>
                )}
            </ul>
        </section>
    )
}