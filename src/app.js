import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



document.addEventListener("DOMContentLoaded", function () {
  const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const palo = [
      { symbol: "♠", color: "black" }, // Picas (Negro)
      { symbol: "♥", color: "red" },   // Corazones (Rojo)
      { symbol: "♦", color: "red" },   // Diamantes (Rojo)
      { symbol: "♣", color: "black" }  // Tréboles (Negro)
  ];

  // Seleccionar número y símbolo aleatorio
  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let randomSuit = palo[Math.floor(Math.random() * palo.length)];

  // Obtener elementos de la carta
  let topSymbol = document.querySelector(".position-absolute.top-0.start-0");
  let cardNumber = document.querySelector(".position-absolute.top-50.start-50");
  let bottomSymbol = document.querySelector(".position-absolute.bottom-0.end-0");

  // Insertar valores aleatorios
  topSymbol.innerText = randomSuit.symbol;
  cardNumber.innerText = randomNumber;
  bottomSymbol.innerText = randomSuit.symbol;

  // Aplicar color correcto
  topSymbol.style.color = randomSuit.color;
  cardNumber.style.color = randomSuit.color;
  bottomSymbol.style.color = randomSuit.color;
});
