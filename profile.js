const favColor = document.querySelector("#color");
const favPlace = document.querySelector("#place");
const favRitual = document.querySelector("#ritual");

favColor.addEventListener("click", () => alert("My Favorite Color is: Red"));

favPlace.addEventListener("click", () => alert("My Favorite Place is: Hawaii"));

favRitual.addEventListener("click", () =>
  alert("My Favorite Ritual is: Exercise")
);

// document.addEventListener("click", () => {
//   alert("My Favorite Color is: Red");
// });

// document.addEventListener("click", () => {
//   alert("My Favorite Place is: Hawaii");
// });

// document.addEventListener("click", () => {
//   alert("My Favorite Ritual is: Exercise");
// });

//Above commented section is wrong because document. runs on the whole document instead of just favColor/Place/Ritual

