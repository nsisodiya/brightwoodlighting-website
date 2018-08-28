function load(url, element)
{
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
      let newNodes = document.createRange().createContextualFragment(this.responseText);
      element.appendChild(newNodes);
  };
  xhr.open('GET', url, true);
  xhr.send();
}

window.onload = () => {
  let listOfNodes = Array.from(document.getElementsByTagName("load"));
  listOfNodes.forEach((eachEle, index) => {
    // let ele = eachEle;
    load(eachEle.getAttribute("src"), eachEle);
  });
};
