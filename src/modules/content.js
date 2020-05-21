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

export default tabElements;
