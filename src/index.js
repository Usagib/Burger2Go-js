import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import homeTab from './modules/home';
import menuTab from './modules/menu';
import contactTab from './modules/contact';
import navigationBar from './modules/nav';
import tabElements from './modules/content';

const init = () => {
  document.getElementById('content').setAttribute("class", "container-fluid");
}

let page = document.getElementById('content');
init();
page.appendChild(navigationBar());
page.appendChild(tabElements(homeTab(),menuTab(),contactTab()));
