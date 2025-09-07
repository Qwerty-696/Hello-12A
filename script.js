// 1-nji düwme
document.getElementById("btn1").addEventListener("click", function() {
  alert("Üstüne basdyň! ✅");
  document.body.style.backgroundColor = "#d4edda"; // ýaşyl fon
  setTimeout(() => document.body.style.backgroundColor = "", 2000); // 2 sekunt soň dolanýar
});

// 2-nji düwme
document.getElementById("btn2").addEventListener("click", function() {
  alert("Men saňa basma diýdim! 🚫");
  document.body.style.backgroundColor = "#f8d7da"; // gyzyl fon
  setTimeout(() => document.body.style.backgroundColor = "", 2000);
});

// 3-nji düwme
document.getElementById("btn3").addEventListener("click", function() {
  alert("Waaay, meni basdyň! 😅");
  document.body.style.backgroundColor = "#ffccff"; // pembe fon
  setTimeout(() => document.body.style.backgroundColor = "", 2000);
});

// Sagat we wagt
function showTime() {
  let now = new Date();
  let time = now.toLocaleTimeString("tk-TM", { hour12: false });
  document.getElementById("clock").innerText = "Türkmenistan wagty: " + time;
}
setInterval(showTime, 1000);
showTime();

// Başlyk basylanda animasiýa
document.getElementById("title").addEventListener("click", function() {
  this.style.color = "#" + Math.floor(Math.random()*16777215).toString(16); // reňk üýtget
  this.style.fontSize = (Math.floor(Math.random() * 10) + 36) + "px"; // font-size üýtget
});
