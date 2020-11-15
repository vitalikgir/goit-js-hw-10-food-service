import './css/styles.css';
import menuItemsTpl from './templates/menu-items.hbs';
import menuData from './menu.json';
import refs from './js/refs';
import onThemeSwitchClick from './js/theme';

refs.menuList.innerHTML = menuItemsTpl(menuData);
refs.themeSwitch.addEventListener('change', onThemeSwitchClick);