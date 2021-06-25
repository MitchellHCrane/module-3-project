console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Form Submitted Successfully");
}

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);

const duck = document.querySelector("#duckImg");

duck.addEventListener("mouseover", () => {
  alert("Quackitty quack you look good today!");
});
