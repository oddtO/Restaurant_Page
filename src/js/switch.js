import loadHomePage from "./home.js";

const PAGE_TABLE = new Map([
  ["home", loadHomePage],
  ["menu", null],
  ["contact", null],
]);

let navUl = document.querySelector("nav > ul");

let current = document.querySelector('li[data-checked="true"] > button');

  PAGE_TABLE.get(current.value)?.();

navUl.addEventListener("click", (event) => {
  let elem = event.target;

  if (elem.tagName != "BUTTON" || elem == current) return;

  current.parentElement.dataset.checked = "false";
  current = elem;

  PAGE_TABLE.get(current.value)?.();

  current.parentElement.dataset.checked = "true";
});
