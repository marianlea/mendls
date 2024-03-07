import './PastryItem.css'
import { getPastryImage } from '../helpers'
import { Link } from 'react-router-dom'



export default function PastryItem({ pastry, spanSize, imageSize, titleSize }) {
    let imageUrl = getPastryImage(pastry)
    
    return (
        <section className="pastry-item">
            <article 
                className="pastry"
                style={{fontSize: titleSize}}>
                <Link 
                    to={`/shop/${pastry.title}`}
                    className='link'
                >
                    <img 
                        src={imageUrl} 
                        alt=""
                        style={{width: imageSize}} />
                </Link>
                <Link 
                    to={`/shop/${pastry.title}`}
                    className='link'
                >
                    <h5>{pastry.title}</h5>
                </Link>
                <section className='pastry-price'>
                    <h5>$ {pastry.price}</h5>
                    <span style={{fontSize: spanSize}}>x</span>
                </section>
            </article>
        </section>
    )
}