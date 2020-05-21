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

export default menuTab;
