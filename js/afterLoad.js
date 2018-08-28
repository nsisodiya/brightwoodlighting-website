// $(function() {
//     var tofetch = $("load").each(function() {
//         $(this).load($(this).attr('src'));
//     });
// });

function load(url, element) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    element.innerHTML = this.responseText;
  };
  xhr.open("GET", url, true);
  xhr.send();
}

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    let listOfNodes = Array.from(document.getElementsByTagName("load"));
    for (var i = 0; i < listOfNodes.length; i++) {
        load(listOfNodes[i].getAttribute("src"), listOfNodes[i]);
    }
  }
};
