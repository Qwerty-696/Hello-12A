// Düwmä basanyňda alert görkez we fon üýtget
document.getElementById("btn").onclick = function() {
  alert("Salam, Dünýä! 🌍 Düwmä basdyň!");
  
  // Body elementini alyp fon üýtgetmek
  const body = document.body;
  
  // Gradien fonlaryň sanawy
  const backgrounds = [
    "linear-gradient(to right, #f6d365, #fda085)",
    "linear-gradient(to right, #89f7fe, #66a6ff)",
    "linear-gradient(to right, #a1c4fd, #c2e9fb)",
    "linear-gradient(to right, #ff9a9e, #fad0c4)"
  ];
  
  // Tasadüfi fon saýla
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  body.style.background = backgrounds[randomIndex];
  body.classList.add("transition"); // CSS-de transition effekt üçin
};
