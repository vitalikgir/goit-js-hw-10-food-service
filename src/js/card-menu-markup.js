
import cardsMenu from '../menu.json'
import templateMarkup from '../tamplates/card-menu.hbs';

const menuEl = document.querySelector('.js-menu')

export default function cardsMenuMarkup() { 
   menuEl.innerHTML =  templateMarkup(cardsMenu);
}