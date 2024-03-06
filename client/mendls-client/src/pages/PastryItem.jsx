import './PastryItem.css'
import { getPastryImage } from '../helpers'


export default function PastryItem({ pastry }) {
    let imageUrl = getPastryImage(pastry)
    
    return (
        <section className="pastry-item">
            <article className="pastry">
                <img src={imageUrl} alt="" />
                <h5>{pastry.title}</h5>
                <section className='pastry-price'>
                    <h5>$ {pastry.price}</h5>
                    <span>x</span>
                </section>
            </article>
        </section>
    )
}