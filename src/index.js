import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Logo from './full-logo.png';

const init = () => {
  document.getElementById('content').setAttribute("class", "container-fluid");
}

const menuTab = () => {

}

const homeTab = () => {

  function attributesSet() {
    banner.setAttribute("class", "container");
    row.setAttribute("class", "row banner-row");
    featurerow.setAttribute("class", "row");
    feat1.setAttribute("class", "col-sm-4 feature-div-1");
    feat2.setAttribute("class", "col-sm-4 feature-div-2");
    feat3.setAttribute("class", "col-sm-4 feature-div-3");
  }

  function render() {
    banner.appendChild(row);
    featurerow.appendChild(feat1);
    featurerow.appendChild(feat2);
    featurerow.appendChild(feat3);
    banner.appendChild(featurerow);
  }

  let banner = document.createElement("div");
  let featurerow = document.createElement("div");
  let feat1 = document.createElement("div");
  let feat2 = document.createElement("div");
  let feat3 = document.createElement("div");
  let row = document.createElement("div");
  attributesSet();
  render()

  return banner
}

const navigationBar = () => {

  function addAsTabElement(tab){
    tab.classList.add("nav-item");
    tab.classList.add("nav-link");
    tab.setAttribute("data-toggle", "tab");
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", "false");
  }

  function addTabDivElement(div){
    div.setAttribute("class", "tab-pane fade");
    div.setAttribute("role", "tabpanel");
  }

  function attributesSet(){
    navtabs.setAttribute("class", "nav nav-tabs nav-fill");
    navtabs.setAttribute("id", "nav-tab");
    navtabs.setAttribute("role", "tablist");
    addAsTabElement(hometab);
    hometab.classList.add("active");
    hometab.setAttribute("id", "nav-home-tab");
    hometab.setAttribute("href", "#nav-home");
    hometab.setAttribute("aria-controls", "nav-home");
    hometab.setAttribute("aria-selected", "true");
    addAsTabElement(menutab);
    menutab.setAttribute("id", "nav-menu-tab");
    menutab.setAttribute("href", "#nav-menu");
    menutab.setAttribute("aria-controls", "nav-menu");
    addAsTabElement(contacttab);
    contacttab.setAttribute("id", "nav-contact-tab");
    contacttab.setAttribute("href", "#nav-contact");
    contacttab.setAttribute("aria-controls", "nav-contact");
    addTabDivElement(homediv);
    homediv.classList.add("show");
    homediv.classList.add("active");
    homediv.setAttribute("id", "nav-home");
    homediv.setAttribute("aria-labeledby", "nav-home-tab");
    addTabDivElement(menudiv);
    menudiv.setAttribute("id", "nav-menu");
    menudiv.setAttribute("aria-labeledby", "nav-menu-tab");
    addTabDivElement(contactdiv);
    contactdiv.setAttribute("id", "nav-contact");
    contactdiv.setAttribute("aria-labeledby", "nav-menu-tab");
    tabcontent.setAttribute("id", "nav-tabContent");
  }

  function innerTextSet(){
    menudiv.innerText = "menu";
    contactdiv.innerText = "conatct";
    hometab.innerText = "Home";
    menutab.innerText = "Menu";
    contacttab.innerText = "Contact";
  }

  function getHomeDiv() {
    return homediv;
  }

  function render() {
    tabcontent.appendChild(homediv);
    tabcontent.appendChild(menudiv);
    tabcontent.appendChild(contactdiv);
    nav.appendChild(navtabs);
    navtabs.appendChild(hometab);
    navtabs.appendChild(menutab);
    navtabs.appendChild(contacttab);
    document.body.appendChild(nav);
    document.body.appendChild(tabcontent);
  }

  let nav = document.createElement("nav");
  let navtabs = document.createElement("div");
  let hometab = document.createElement("a");
  let menutab = document.createElement("a");
  let contacttab = document.createElement("a");
  let homediv = document.createElement("div");
  let menudiv = document.createElement("div");
  let contactdiv = document.createElement("div");
  let tabcontent = document.createElement("div");

  attributesSet();
  innerTextSet();
  render();

  return {getHomeDiv};

}

let homepage = navigationBar().getHomeDiv();
init();
homepage.appendChild(homeTab());
features();
