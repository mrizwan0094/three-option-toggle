document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".tri-state-toggle-button");
  const firstButton = toggleButtons[0];
  firstButton.classList.add("active");
  firstButton.previousElementSibling.checked = true;

  toggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      toggleButtons.forEach(function (btn) {
        btn.classList.remove("active");
        btn.previousElementSibling.checked = false;
      });
      this.classList.add("active");
      this.previousElementSibling.checked = true;
    });
  });
});
