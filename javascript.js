const dialog = document.querySelector("dialog");
const showButton = document.getElementById("myBtn");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.classList.add('open');
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.classList.remove('open');
  dialog.close();
});