import * as Tile from "./tile.js";
import Chef from "../img/c3599469bc5b54a2a70477761d77d42b.jpg";
import Manager from "../img/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash (1).jpg";
import Waiter from "../img/petr-sevcovic-e5Q5vWO55uU-unsplash.jpg";

export default function loadContactsPage()
{
  let mainUl = Tile.resetPage_getClearList();

  Tile.loadTitle(mainUl, "Contact Us");
  loadContact(
    mainUl,
    "Chef",
    Chef,
    "Name Surname",
    "+00000000",
    "fakemail@email.com"
  );

  loadContact(
    mainUl,
    "Manager",
    Manager,
    "Name Surname",
    "+00000000",
    "fakemail@email.com"
  );

  loadContact(
    mainUl,
    "Waiter",
    Waiter,
    "Name Surname",
    "+00000000",
    "fakemail@email.com"
  );
}

function loadContact(mainUl, occupation, imgSrc, fullName, phoneNumber, email) {
  let li = createContact(occupation, imgSrc, fullName, phoneNumber, email);
  mainUl.append(li);
}

function createContact(occupation, imgSrc, fullName, phoneNumber, email) {
  let li = Tile.createTile("", "contact");
  Tile.addHeader(li, occupation);
  Tile.addCentered(
    li,
    `  
                  <img
src="${imgSrc}"
                    alt="person"
                  /> <ul>
<li class="name">${fullName}</li>
<li>${phoneNumber}</li>
<li>${email}</li>
                  </ul>
 
`
  );

  return li;
}
