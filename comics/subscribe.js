const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Thank you for subscribing!");
    window.location.href="home.html";
  });
});
