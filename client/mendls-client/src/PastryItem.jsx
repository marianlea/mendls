import './PastryItem.css'
import courtesan from './assets/courtesan.png'
import eclair from './assets/eclair.png'
import macaron from './assets/macaron.png'
import madeleine from './assets/madeleine.png'
import caneles from './assets/caneles.png'
import gateau from './assets/gateau.png'
import flan from './assets/flan.png'


export default function PastryItem({ pastry }) {
    let imageUrl 
    switch(pastry.id) {
        case 1: 
            imageUrl = courtesan
            break
        case 2: 
            imageUrl = eclair
            break
        case 3: 
            imageUrl = macaron
            break
        case 4: 
                imageUrl = madeleine
            break
        case 5: 
            imageUrl = caneles
            break
        case 6: 
            imageUrl = gateau
            break
        case 7: 
            imageUrl = flan
            break
    }
    return (
        <section className="pastry-item">
            <img src={imageUrl} alt="" />
            <h5>{pastry.title}</h5>
            <h5>{pastry.price}</h5>
        </section>
    )
}