let grid = document.querySelector(".grid i");
let list = document.querySelector(".list i");
let box = document.querySelectorAll(".box");

list.addEventListener("click", () => {
  list.style.color = "#d4a373";
  grid.style.color = "black";
  box.forEach((el) => {
    el.classList.add("active");
  });
});

grid.addEventListener("click", () => {
  grid.style.color = "#d4a373";
  list.style.color = "black";
  box.forEach((el) => {
    el.classList.remove("active");
  });
});
