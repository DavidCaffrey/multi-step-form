const one = document.querySelector("#one");
const two = document.querySelector("#two");
// Get next step button
const nextStepButton = document.querySelector("#next-step");
const backLink = document.querySelector("#backLink");
//add event listner to button
nextStepButton.addEventListener("click", function () {
  one.classList.add("hidden");
  two.classList.remove("hidden");
  backLink.classList.remove("hidden");
});
