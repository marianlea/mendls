import './PastriesList.css'
import PastryItem from "./PastryItem";
import { useState } from 'react';

export default function PastriesList({ pastries, basket, onBasketChange }) {

    const [formData, setFormData] = useState({})

    function handleFormChange(e, pastry) {
        setFormData((prev) => ({...prev, ...pastry, quantity: e.target.value,  }))
    }

    console.log(formData);
    function handleBasketChange(e) {
        e.preventDefault()
        onBasketChange(formData)
    }

    return (
        <section className="pastries-list">
            <ul>
                {pastries.map(pastry =>{
                    return <li key={pastry.id}>
                        <PastryItem  pastry={pastry} />
                        <form onSubmit={handleBasketChange} >
                            <input
                                type="number"
                                defaultValue={basket.find(item => item.id === pastry.id)?.quantity || null}
                                onChange={(e) => handleFormChange(e, pastry)}
                                name="quantity"
                                min="1"

                            />
                            <button>add to basket</button>
                        </form>
                    </li>
                })}
            </ul>
        </section>
    )
}