var attempt = 1;
var a, b;
var storeValue;
let allCards = [];

function turn(x, element) {
  element.childNodes[1].style.transform = "rotateY(180deg)";
  attempt++;
  if (attempt == 1) {
    a = element.dataset.name;
    storeValue = element.childNodes[1].id;
    console.log(attempt);
  } else if (attempt == 2) {
    console.log(attempt);
    attempt = 0;
    b = element.dataset.name;
    if (a != b) {
      setTimeout(() => {
        element.childNodes[1].style.transform = "rotateY(0deg)";
        document.getElementById(`${storeValue}`).style.transform = "";
      }, 2000);
      console.log(false);
    } else {
      console.log(true);
    }
  }
}

function turnBack() {}
