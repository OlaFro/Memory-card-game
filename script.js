var attempt = 0;
var a, b;
var storeValue;
let allCards = [];

mixing();

function play() {
  mixing();
}

function restart() {
  mixing();
}

function mixing(maximum = 16) {
  let position = [];
  let random = 0;

  for (let i = 0; i < maximum; i++) {
    do {
      random = Math.floor(Math.random() * maximum + 1);
    } while (position.includes(random) === true);
    position[i] = random;
  }

  console.log(position);

  for (let i = 0; i < maximum; i++) {
    document.getElementById(
      `flip-card${i + 1}`
    ).style.gridArea = `item${position[i]}`;
  }
}

function turn(element) {
  element.childNodes[1].style.transform = "rotateY(180deg)";
  attempt++;
  if (attempt == 1) {
    a = element.dataset.name;
    storeValue = element.childNodes[1].id;
    console.log(attempt);
  } else if (attempt == 2) {
    clicking(false);
    console.log(attempt);
    attempt = 0;
    b = element.dataset.name;
    if (a != b) {
      setTimeout(() => {
        element.childNodes[1].style.transform = "rotateY(0deg)";
        document.getElementById(`${storeValue}`).style.transform = "";
      }, 650);
      console.log(false);
      clicking(true);
    } else {
      console.log(true);
      clicking(true);
    }
  }
}

function clicking(allow) {
  for (
    var i = 0;
    i < document.getElementsByClassName("flip-card").length;
    i++
  ) {
    document.getElementsByClassName("flip-card")[i].onclick = allow;
  }
}
