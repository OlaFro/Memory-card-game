var attempt = 0;
var a, b;
function turn(x, element) {
  document.getElementById(`card${x}`).style.transform = "rotateY(180deg)";
  attempt++;
  if (attempt == 1) {
    a = element.dataset.name;
  } else if (attempt == 2) {
    attempt = 0;
    b = element.dataset.name;
    if (a == b) {
      document.getElementById(`card${x}`).style.transform = "";
    } else {
      document.getElementById(`card${x}`).style.transform = "rotateY(0deg)";
    }
  }
}

function turnBack() {}
