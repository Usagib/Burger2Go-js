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

export default contactTab;
