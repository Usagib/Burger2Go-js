import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Logo from './full-logo.png';

const init = () => {
  document.getElementById('content').setAttribute("class", "container-fluid");
}

const menuTab = () => {
  let container = document.createElement("div");
  let header = document.createElement("h2");
  let subheader = document.createElement("h4");
  let row = document.createElement("div");

  function attributesSet() {
    container.classList.add("container");
    row.setAttribute("class", "row text-center text-lg-left");
    header.setAttribute("class", "font-weight-light text-center text-lg-left mt-4 mb-0");
  }

  function textSet() {
    header.innerText = "Delicious Menu 2Go!";
    subheader.innerText = "Order now! 222-222-55-66";
  }

  function render() {
    container.appendChild(header);
    container.appendChild(subheader);
    container.appendChild(row);
    container.appendChild(fooddiv);
  }

  function menuRender(itemNo) {
    let container = document.createElement("div");
    container.setAttribute("class", "row text-center text-lg-left");
    for (var i = 0; i < itemNo; i++) {
      let card = document.createElement("div");
      card.setAttribute("class", "col-lg-3 col-md-4 col-6");
      let link = document.createElement("a");
      link.setAttribute("class", "d-block mb-4 h-100");
      let img = document.createElement("img");
      img.setAttribute("class", "img-fluid img-thumbnail");
      img.setAttribute("src", "../src/Menuimg"+i+".png")
      card.appendChild(link);
      link.appendChild(img);
      container.appendChild(card);
    }
    return container
  }

  let fooddiv = menuRender(12);
  attributesSet();
  textSet();
  render();

  return container
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

const contactTab = () => {
  let row = document.createElement("div");
  let leftRow = document.createElement("div");
  let offset = document.createElement("div");
  let header = document.createElement("h3");
  let subheader = document.createElement("h4");
  let rightRow = document.createElement("div");
  let contactinfo = ['Name: ', 'Email: ', 'Message: '];
  let placeholders = ['Enter your name', 'enter your email', 'type your message'];

  function renderForm(info,ph) {
    let innerForm = document.createElement("div");
    for (var i = 0; i < info.length; i++) {
      let group = document.createElement("div");
      group.classList.add("form-group");
      let label = document.createElement("label");
      label.innerText = info[i];
      let lilCol = document.createElement("div");
      lilCol.classList.add("col-sm-6");
      let input = document.createElement("input");
      input.setAttribute("class", "form-control");
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", ph[i]);
      group.appendChild(label);
      group.appendChild(lilCol);
      lilCol.appendChild(input);
      innerForm.appendChild(group);
    }
    return innerForm;
  }

  function attributesSet() {
    row.classList.add("row");
    leftRow.classList.add("col-md-2");
    rightRow.classList.add("col-md-7");
    offset.classList.add("col-md-2");
  }

  function textSet() {
    header.innerText = "Send us a Message";
    subheader.innerText = "Let us know what do you think";
  }

  function render() {
    row.appendChild(offset);
    row.appendChild(leftRow);
    row.appendChild(rightRow);
    leftRow.appendChild(header);
    leftRow.appendChild(subheader);
    rightRow.append(form);
  }

  let form = renderForm(contactinfo, placeholders);
  attributesSet();
  textSet();
  render();

  return row
}

const tabElements = (home, menu, contact) => {
  let homediv = document.createElement("div");
  let menudiv = document.createElement("div");
  let contactdiv = document.createElement("div");
  let tabcontent = document.createElement("div");

  function addTabDivElement(div){
    div.setAttribute("class", "tab-pane fade");
    div.setAttribute("role", "tabpanel");
  }

  function attributesSet() {
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
    tabcontent.setAttribute("class", "tab-content");
  }

  function render() {
    homediv.appendChild(home);
    menudiv.appendChild(menu);
    contactdiv.appendChild(contact);
    tabcontent.appendChild(homediv);
    tabcontent.appendChild(menudiv);
    tabcontent.appendChild(contactdiv);
  }

  attributesSet();
  render();
  return tabcontent
}

const navigationBar = () => {

  function addAsTabElement(tab){
    tab.classList.add("nav-item");
    tab.classList.add("nav-link");
    tab.setAttribute("data-toggle", "tab");
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", "false");
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
  }

  function innerTextSet(){
    hometab.innerText = "Home";
    menutab.innerText = "Menu";
    contacttab.innerText = "Contact";
  }


  function render() {

    nav.appendChild(navtabs);
    navtabs.appendChild(hometab);
    navtabs.appendChild(menutab);
    navtabs.appendChild(contacttab);
  }

  let nav = document.createElement("nav");
  let navtabs = document.createElement("div");
  let hometab = document.createElement("a");
  let menutab = document.createElement("a");
  let contacttab = document.createElement("a");

  attributesSet();
  innerTextSet();
  render();

  return nav
}

let page = document.getElementById('content');
init();

console.log(menuTab());
console.log(homeTab());
console.log(contactTab());
console.log(navigationBar());
page.appendChild(navigationBar());
page.appendChild(tabElements(homeTab(),menuTab(),contactTab()));
