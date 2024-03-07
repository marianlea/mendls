import courtesan from '../assets/courtesan.png'
import eclair from '../assets/eclair.png'
import macaron from '../assets/macaron.png'
import madeleine from '../assets/madeleine.png'
import caneles from '../assets/caneles.png'
import gateau from '../assets/gateau.png'
import flan from '../assets/flan.png'

export function getPastryImage(pastry) {
  switch(pastry.id) {
    case 1: 
        return courtesan
    case 2: 
        return eclair
    case 3: 
        return macaron
    case 4: 
        return madeleine
    case 5: 
        return caneles
    case 6: 
        return gateau
    case 7: 
        return flan
  }
}

