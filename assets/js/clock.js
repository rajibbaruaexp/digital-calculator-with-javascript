let digiSecond = document.getElementById("seconds");
let digiMinutes = document.getElementById("minutes");
let digiHours = document.getElementById("hours");
let digiampm = document.getElementById("ampm");

function setClock() {
  let currentDate = new Date();

  let theSecond = currentDate.getSeconds();
  let theMinute = currentDate.getMinutes();
  let theHour = currentDate.getHours();

  theHour = theHour === 0 ? (theHour = 12) : theHour;

  if (theHour > 12) {
    digiampm = digiampm.innerText = "PM";
    theHour = theHour - 12;
  }

  if (theHour < 10) {
    theHour = "0" + theHour;
  }

  theMinute = theMinute < 10 ? "0" + theMinute : theMinute;
  theSecond = theSecond < 10 ? "0" + theSecond : theSecond;

  digiSecond.innerText = theSecond;
  digiMinutes.innerText = theMinute;
  digiHours.innerText = theHour;
}

setInterval(setClock, 1000);
setClock();
