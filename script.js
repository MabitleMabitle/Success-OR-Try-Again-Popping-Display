const buttons = document.querySelectorAll(".button");
const Modals = document.querySelectorAll(".modal");
const modalButton = document.querySelectorAll(".lower-button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    Modals.forEach((modal) => {
      if (modal.classList[0].split("-")[0] === btn.classList[1].split("-")[0]) {
        modal.classList.add("open");
      }
      //
      modalButton.forEach((modalBtn) => {
        modalBtn.addEventListener("click", () => {
          modal.classList.remove("open");
        });
      });
    });
  });
});
