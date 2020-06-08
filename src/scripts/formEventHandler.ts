const form = document.getElementById("form") as HTMLFormElement;
const popupLoading = document.querySelector(".popup.popup-loading");
const popupSuccess = document.querySelector(".popup.popup-success");
const popupError = document.querySelector(".popup.popup-error");

form.addEventListener("loadingSend", () => {
  popupLoading.classList.add("show");
});

form.addEventListener("successSend", () => {
  popupLoading.classList.remove("show");
  popupSuccess.classList.add("show");
  setTimeout(() => popupSuccess.classList.remove("show"), 3000);
  form.reset();
});

form.addEventListener("errorSend", () => {
  popupLoading.classList.remove("show");
  popupSuccess.classList.add("show");
  setTimeout(() => popupSuccess.classList.remove("show"), 3000);
});
