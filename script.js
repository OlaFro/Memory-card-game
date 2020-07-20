var attempt = 0;
var a, b;
var storeValue;
let allCards = [];
var score = 0;
var failAttempts = 0;
var timeleft = 0;

mixing();

function play() {
    for (let i = 1; i <= 16; i++) {
    document.getElementById(`card${i}`).style.transform = "rotateY(0deg)";
  }
    setTimeout(() => {
    mixing();
  }, 700);
  attempt = 0;
  failAttempts = 0;
  timeleft = 75;
  var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      alert(`Time is out, you have scored ${score} points!` )
    }
    document.getElementById("timer").innerHTML = `Time: ${timeleft}`;
    timeleft -= 1;
  }, 1000);
}

function restart() {
  timeleft = 0;
  for (let i = 1; i <= 16; i++) {
    document.getElementById(`card${i}`).style.transform = "rotateY(0deg)";
  }
  setTimeout(() => {
    mixing();
  }, 700);
  attempt = 0;
  failAttempts = 0;
  
}

function mixing(maximum = 16) {
  let position = [];
  let random = 0;

  for (let i = 0; i < maximum; i++) {
    do {
      random = Math.floor(Math.random() * maximum + 1;
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
    console.log(`attempt:`, attempt);
  } else if (attempt == 2) {
    clicking("none");
    console.log(`attempt:`, attempt);
    attempt = 0;
    b = element.dataset.name;
    if (a != b) {
      setTimeout(() => {
        element.childNodes[1].style.transform = "rotateY(0deg)";
        document.getElementById(`${storeValue}`).style.transform = "";
        clicking("auto");
      }, 1000);
      console.log(false);
      failAttempts++;
    } else {
      clicking("");
      score += 12.5;
      failAttempts = 0;
    }
  }
  if (failAttempts === 4) {
    score = 0;
    // alert("You are bad in the memery game! Back to zero!");
    failAttempts = 0;
  }
  document.getElementById('fa').innerHTML = `FA: ${failAttempts}`;
document.getElementById('scoretable').innerHTML = `Score: ${score}`;
  console.log(`scores:`, score);
  console.log(`fail attempts:`, failAttempts);
}

function clicking(allow) {
  for (
    var i = 0;
    i < document.getElementsByClassName("flip-card").length;
    i++
  ) {
    document.getElementsByClassName("flip-card")[
      i
    ].style.pointerEvents = `${allow}`;
  }
}

document.getElementById('fa').innerHTML = `FA: ${failAttempts}`;
document.getElementById('scoretable').innerHTML = `Score: ${score}`;