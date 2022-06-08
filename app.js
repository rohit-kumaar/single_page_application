// querySelectorAll function
function qsAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

// querySelector function
function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

const p = qsAll("p");
const buttons = qsAll("button");

const showFruits = (page) => {
  p.forEach((p) => {
    p.style.opacity = "0";
  });

  qs(`#${page}`).style.opacity = "1";
};

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    showFruits(this.dataset.fruit);
  });
});
