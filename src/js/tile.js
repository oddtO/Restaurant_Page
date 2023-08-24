export function createTile(idName, className) {
  let spanAfter = document.createElement("span");
  spanAfter.className = "after";
  let spanDesc = document.createElement("span");
  spanDesc.className = "desc";

  let section = document.createElement("section");
  section.append(spanAfter, spanDesc);
  let liElem = document.createElement("li");
  liElem.append(section);
  liElem.id = idName;
  liElem.className = className;
  return liElem;
}

export function addHeader(elem, headerText) {
  let h2 = document.createElement("h2");
  h2.className = "title";
  h2.textContent = headerText;
  elem.querySelector(".after").after(h2);
}
export function addFlowingText(elem, content) {
  let flowing = document.createElement("span");
  flowing.className = "flowing-text";
  flowing.insertAdjacentHTML("beforeend", content);
  elem.querySelector(".desc").append(flowing);
}
export function addCenteredText(elem, content) {
  let centered = document.createElement("span");
  centered.className = "centered-text";
  centered.insertAdjacentHTML("beforeend", content);
  elem.querySelector(".desc").append(centered);
}
export function createTitle(title) {
  let li = createTile("", "title");
  addCenteredText(li, title);

  return li;
}

export function loadTitle(mainUl, title) {
  let li = createTitle(title);
  mainUl.append(li);
}


export function resetPage_getClearList() {

  let mainUl = document.createElement("ul");

  let main = document.querySelector("#content > main");
  main.innerHTML = "";
  main.append(mainUl);
	return mainUl;

}
