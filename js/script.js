const timertext = document.querySelector('#timer');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const timeNY = document.querySelector('#NY')
let obj = {};
let clocktimer;
let startDate;

class Timer {
  constructor(startTime, stopTime, interval) {
    this.startTime = startTime;
    this.stopTime = stopTime;
    this.interval = interval;
  }

  start() {
    startDate = new Date();
    clocktimer = setInterval("startTIME()", 10);
    Timer.milSecStart = startTIME().milsec;
    Timer.secStart = startTIME().sec;
    Timer.minStart = startTIME().min;
    Timer.startTime = timertext.textContent;
  }

  stop() {
    clearInterval(clocktimer);
    Timer.milSecStop = startTIME().milsec;
    Timer.secStop = startTIME().sec;
    Timer.minStop = startTIME().min;
    Timer.stopTime = timertext.textContent;
    let m = Timer.minStop - Timer.minStart;
    let s = Timer.secStop - Timer.secStart;
    let ms = Timer.milSecStop - Timer.milSecStart;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;
    if (ms < 10) ms = '0' + ms;
    Timer.interval = `${m}:${s}:${ms}`;
  }

  getTime() {
    console.log(`interval time is ${Timer.interval}`);
    return Timer.interval;
  }

  static timeToNY() {
    let today = new Date();
    let nextDate = new Date("January 1, 2019")
    let msPerDay = 24 * 60 * 60 * 1000;
    let daysLeft = Math.round((nextDate.getTime() - today.getTime()) / msPerDay);
    timeNY.textContent = `number of days until new year: ${daysLeft}`;
  }
}

let firstExample = new Timer(14, 20, 6);
console.log(firstExample);

let secondExample = new Timer(1556, 5959, 4844);
console.log(secondExample);

function startTIME() {
    let thisDate = new Date();
    let t = thisDate.getTime() - startDate.getTime();
    let ms = t % 1000;
    ms = Math.floor(ms);
    t = Math.floor(t / 1000);
    let s = t % 60;
    t = Math.floor(t / 60);
    let m = t % 60;
    t = Math.floor(t / 60);
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;
    if (ms < 10) ms = '0' + ms;
    timertext.textContent = m + ':' + s + ':' + ms;
    return obj = {
      milsec: ms,
      sec: s,
      min: m
    }
}

start.addEventListener('click', Timer.prototype.start)

function create() {
  let stopwatch = new Timer(Timer.startTime, Timer.stopTime, Timer.interval);
  console.log(stopwatch)
}

const result = () => {
  Timer.prototype.stop();
  Timer.prototype.getTime();
  create();
}

stop.addEventListener('click', result)
Timer.timeToNY();
