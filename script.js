var attempt = 1;
var a, b;
var storeValue;
function turn(x, element) {
  element.childNodes[1].style.transform = "rotateY(180deg)";
  if (attempt == 1) {
    a = element.dataset.name;
    storeValue = element.childNodes[1].id;
  } else if (attempt == 2) {
    b = element.dataset.name;
    if (a != b) {
      setTimeout(() => {
        element.childNodes[1].style.transform = "rotateY(0deg)";
        document.getElementById(`${storeValue}`).style.transform = "";
      }, 1000);
      // document.getElementById(`card${x}`).style.transform = "";
    }
    attempt = 0;
  }
  attempt++;
}

function turnBack() {}
