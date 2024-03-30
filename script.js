let seconds = 0;
let read = document.getElementById("read");
let write = document.getElementById("write");
let mistakeID = document.getElementById("mistakeID");
let lengthID = document.getElementById("totalChar");
let timeID = document.getElementById("timeID");
let speedID = document.getElementById("speedID");
let accuracyID = document.getElementById("accuracyID");
let writtenWord = document.getElementById("writtenWord");
let i = 0;
let speed = 0;
let mistake = 0;
let starter = false;
let words = 0;
let length = countWords(read.value);
lengthID.innerHTML = length;
function countWords(str) {
  let words = str.split(/\s+/);
  return words.length;
}
setInterval(() => {
  if (starter) {
    seconds++;
    timeID.innerHTML = MMSS(seconds);
    speedID.innerHTML = Math.floor((words / seconds) * 60);
    accuracyID.innerText = Math.floor(((i - mistake) / i) * 100);
    writtenWord.innerHTML = words;
  }
}, 1000);
// let audioTyping = new Audio("/btn.mp3");
write.addEventListener("input", function (e) {
  // audioTyping.play();
  // Your code to handle the change event goes here
  if (e.target.value[i] == read.value[i]) {
    if (e.target.value[i] == " ") {
      words++;
    }
    i++;
    mistakeID.classList.remove("blink");
  } else {
    write.value = write.value.slice(0, -1);
    mistake++;
    mistakeID.innerHTML = mistake;
    mistakeID.classList.add("blink");
  }
  starter = true;
});
function MMSS(duration1) {
  // Hours, minutes and seconds
  const hrs = ~~(duration1 / 3600);
  const mins = ~~((duration1 % 3600) / 60);
  const secs = ~~duration1 % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = "";

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }
  if (mins > 10) {
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  } else {
    ret += "0" + mins + ":" + (secs < 10 ? "0" : "");
  }
  ret += "" + secs;

  return ret;
}
