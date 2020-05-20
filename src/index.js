import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Logo from './full-logo.png';

const init = () => {
  document.getElementById('content').setAttribute("class", "container-fluid");
}

const homeBanner = () => {
  let banner = document.createElement("div");
  banner.setAttribute("class", "container-fluid");
  let row = document.createElement("div");
  row.setAttribute("class", "row banner-row");
  document.getElementById('content').appendChild(banner);
  banner.appendChild(row);
}

const navigationBar = () => {
  let nav = document.createElement("nav");
  nav.setAttribute("class", "navbar navbar-expand-lg navbar-light bg-light");
  let container = document.createElement("div");
  container.setAttribute("class", "container");
  let logo = document.createElement("a");
  logo.setAttribute("class", "navbar-brand brand-logo");
  let logoImg = new Image();
  logoImg.setAttribute("class", "brand-img");
  let toggler = document.createElement("button");
  toggler.setAttribute("class", "navbar-toggler");
  let togglerIcon = document.createElement("span");
  togglerIcon.setAttribute("class", "navbar-toggler-icon");
  let collapseNavbar = document.createElement("div");
  collapseNavbar.setAttribute("id", "navbarSupportedContent");
  let collapseUl = document.createElement("ul");
  collapseUl.setAttribute("class", "navbar-nav ml-auto");
  let collapseLi = document.createElement("li");
  collapseLi.setAttribute("class", "nav-item dropdown");
  let dropdownToggle = document.createElement("a");

  let dropdownMenu = document.createElement("div");

  let dropdownItem = document.createElement("a");
  dropdownItem.setAttribute("class", "dropdown-item");
  dropdownItem.setAttribute("href", "#");
  let dropdownItem1 = dropdownItem;
  let dropdownItem2 = dropdownItem;

  logo.setAttribute("href", "index.html");
  toggler.setAttribute("type", "button");
  toggler.setAttribute("data-toggle", "collapse");
  toggler.setAttribute("data-target", "#navbarSupportedContent");
  toggler.setAttribute("aria-controls", "navbarSupportedContent");
  toggler.setAttribute("aria-expanded", "false");
  toggler.setAttribute("aria-label", "Toggle navigation");
  collapseNavbar.setAttribute("class", "collapse navbar-collapse");
  dropdownToggle.setAttribute("class", "nav-link dropdown-toggle");
  dropdownToggle.setAttribute("href", "#");
  dropdownToggle.setAttribute("id", "navbarDropdown");
  dropdownToggle.setAttribute("role", "button");
  dropdownToggle.setAttribute("data-toggle", "dropdown");
  dropdownToggle.setAttribute("aria-haspopup", "true");
  dropdownToggle.setAttribute("aria-expanded", "false");
  dropdownMenu.setAttribute("href", "#")
  dropdownMenu.setAttribute("class", "dropdown-menu dropdown-menu-right animate slideIn");
  dropdownMenu.setAttribute("aria-labeledby", "navbarDropdown");
  logoImg.src = Logo;

  dropdownToggle.innerText = 'BurGer&Go!';
  dropdownItem.innerText = 'Restaurants';
  dropdownItem1.innerText = 'History';
  dropdownItem2.innerText = 'Menu';

  document.getElementById("content").appendChild(nav);
  nav.appendChild(container);
  container.appendChild(logo);
  logo.appendChild(logoImg);
  container.appendChild(toggler);
  toggler.appendChild(togglerIcon);
  container.appendChild(collapseNavbar);
  collapseNavbar.appendChild(collapseUl);
  collapseUl.appendChild(collapseLi);
  collapseLi.appendChild(dropdownToggle);
  collapseLi.appendChild(dropdownMenu);
  dropdownMenu.appendChild(dropdownItem);
  dropdownMenu.appendChild(dropdownItem1);
  dropdownMenu.appendChild(dropdownItem2);
}

const features = () => {
  let row = document.createElement("div");
  let feat1 = document.createElement("div");
  let feat2 = document.createElement("div");
  let feat3 = document.createElement("div");

  row.setAttribute("class", "row");
  feat1.setAttribute("class", "col-sm-4 my-2 feature-div-1");
  feat2.setAttribute("class", "col-sm-4 my-2 feature-div-2");
  feat3.setAttribute("class", "col-sm-4 my-2 feature-div-3");

  row.appendChild(feat1);
  row.appendChild(feat2);
  row.appendChild(feat3);

  document.getElementById('content').appendChild(row);
}

init();
navigationBar();
homeBanner();
features();
