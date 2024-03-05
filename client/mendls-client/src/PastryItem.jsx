import './PastryItem.css'
import { getPastryImage } from './helpers'


export default function PastryItem({ pastry }) {
    let imageUrl = getPastryImage(pastry)
    
    return (
        <section className="pastry-item">
            <img src={imageUrl} alt="" />
            <h5>{pastry.title}</h5>
            <h5>{pastry.price}</h5>
        </section>
    )
}