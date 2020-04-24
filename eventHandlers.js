// document.getElementById("message").addEventListener("keyup", () => {
//   document.getElementsByClassName("item1").innerHTML = event.target.value;
//   document.getElementsByClassName("item2").innerHTML = event.target.value;
// });

// document.querySelector("message").addEventListener("keyup", function(event) => {}
// let messageSection = document.getElementById("message");
// let outputSection = document.querySelectorAll("item1");

// messageSection.addEventListener("keyup", function() {
//   outputSection.innerHTML = event.target.value;
// });

document.querySelector("#message").addEventListener("keyup", function(event) {
  let boxes = document.querySelectorAll(".article-box");
  for (const box of boxes) {
    box.innerHTML = event.target.value;
  }
});
