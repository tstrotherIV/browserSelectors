document.getElementById("message").addEventListener("keyup", () => {
  document.getElementById("item1").innerHTML = event.target.value;
  document.getElementById("item2").innerHTML = event.target.value;
});

// let messageSection = document.getElementById("message");
// let outputSection = document.querySelectorAll("#item1");

// messageSection.addEventListener("keyup", function() {
//   outputSection.innerHTML = event.target.value;
// });
