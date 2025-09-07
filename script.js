// Düwmä 1
const button1 = document.getElementById("btn1");
if (button1) {
  button1.onclick = function() {
    alert("Salam Gowmy Klasdaş! 🌟");
    document.body.style.background = "linear-gradient(to right, #f6d365, #fda085)";
  };
}

// Düwmä 2
const button2 = document.getElementById("btn2");
if (button2) {
  button2.onclick = function() {
    alert("Basma Diydim Basdyñay! 😂");
    document.body.style.background = "linear-gradient(to right, #89f7fe, #66a6ff)";
  };
}

// Türkmenistanda wagt görkezmek (UTC+5)
function updateClock() {
  const now = new Date();
  const turkmenTime = new Date(now.getTime() + 5*60*60*1000); // UTC+5
  const hours = String(turkmenTime.getUTCHours()).padStart(2, '0');
  const minutes = String(turkmenTime.getUTCMinutes()).padStart(2, '0');
  const seconds = String(turkmenTime.getUTCSeconds()).padStart(2, '0');

  const clock = document.getElementById("clock");
  if(clock) {
    clock.textContent = `Türkmenistan wagty: ${hours}:${minutes}:${seconds}`;
  }
}

// Her sekunt täzeläp dur
setInterval(updateClock, 1000);
updateClock(); // sahypa açylanda hem görünsün
