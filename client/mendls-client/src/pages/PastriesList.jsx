import './PastriesList.css'
import PastryItem from "./PastryItem";
import { useState, useEffect } from 'react';
import Footer from '../components/Footer'
import noise from '../assets/noise.png'

export default function PastriesList({ pastries, basket, onBasketChange, footerVisible }) {

    const [formData, setFormData] = useState({})

    function handleFormChange(e, pastry) {
        setFormData((prev) => ({...prev, ...pastry, quantity: e.target.value,  }))
    }

    console.log(formData);
    function handleBasketChange(e) {
        e.preventDefault()
        if (!formData?.quantity){
            alert('Enter item quantity');
            return;
        }
        onBasketChange(formData)
    }

    return (
        <div className="pastries-list" id="shop">
            <h5 className='pastries-title'>PASTRIES</h5>
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
                            <button className='add-btn'>add to basket</button>
                        </form>
                    </li>
                })}
            </ul>
            <Footer color='#FFC5E8' image={noise} visible={footerVisible}  />
        </div>
    )
}