import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadContactsPage from "./contact.js";

const PAGE_TABLE = new Map([
  ["home", loadHomePage],
  ["menu", loadMenuPage],
  ["contact", loadContactsPage],
]);

let navUl = document.querySelector("nav > ul");

let current = document.querySelector('li[data-checked="true"] > button');

PAGE_TABLE.get(current.value)();

navUl.addEventListener("click", (event) => {
  let elem = event.target;

  if (elem.tagName != "BUTTON" || elem == current) return;

  current.parentElement.dataset.checked = "false";
  current = elem;

  PAGE_TABLE.get(current.value)();

  current.parentElement.dataset.checked = "true";
});
