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

export default navigationBar;
