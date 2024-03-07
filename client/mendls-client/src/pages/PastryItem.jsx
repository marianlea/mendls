import './PastryItem.css'
import { getPastryImage } from '../helpers'
import { Link } from 'react-router-dom'



export default function PastryItem({ pastry }) {
    let imageUrl = getPastryImage(pastry)
    
    return (
        <section className="pastry-item">
            <article className="pastry">
                <img src={imageUrl} alt="" />
                <Link 
                    to={`/shop/${pastry.title}`}
                    className='link'
                >
                    <h5>{pastry.title}</h5>
                </Link>
                <section className='pastry-price'>
                    <h5>$ {pastry.price}</h5>
                    <span>x</span>
                </section>
            </article>
        </section>
    )
}