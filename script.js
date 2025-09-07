// Düwmä baglanyşykly we diňe şol sahypada işleýär
const myButton = document.getElementById("btn");

if (myButton) {  // düwme bar bolsa işle
  myButton.onclick = function() {
    alert("Salam, Klasdaş 😊!");

    // Body elementini alyp fon üýtget
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
}
