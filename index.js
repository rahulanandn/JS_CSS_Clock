let hours;
let minutes;
let seconds;

function presentTime() {
  let dateTime = new Date();
  hours = dateTime.getHours();
  minutes = dateTime.getMinutes();
  seconds = dateTime.getSeconds();

  // Calculating Hours Hand Angle
  let hoursAngel = (hours) => {
    const hour = 30 * hours + 90;
    return `${hour}deg`;
  };

  // Calculating Minute  Hand Angle
  let minutesAngel = (minutes) => {
    const minute = 6 * minutes + 90;
    return `${minute}deg`;
  };

  // Calculating Seconds Hand Angle
  let secondsAngel = (seconds) => {
    const second = (seconds / 60) * 360;
    return `${second}deg`;
  };

  console.log(hours, minutes, seconds);
  document.querySelector(
    ".hand.hour-hand"
  ).style.transform = `rotate(${hoursAngel(hours)})`;
  document.querySelector(
    ".hand.min-hand"
  ).style.transform = `rotate(${minutesAngel(minutes)})`;
  document.querySelector(
    ".hand.second-hand"
  ).style.transform = `rotate(${secondsAngel(seconds)})`;
  return dateTime;
}

setInterval(presentTime, 1000);
