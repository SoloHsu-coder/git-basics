const openBtn = document.querySelector(".open-btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.showModal();
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.close();
});
