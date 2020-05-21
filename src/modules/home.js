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

export default homeTab;
