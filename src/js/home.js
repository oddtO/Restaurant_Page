import {
  createTile,
  addHeader,
  addFlowingText,
  addCenteredText,
  loadTitle,
} from "./tile.js";

export default function loadHomePage() {
  let mainUl = document.createElement("ul");

  let main = document.querySelector("#content > main");
  main.innerHTML = "";
  main.append(mainUl);

  loadTitle(mainUl, "Gastronomia Elegante");
  loadGreeting(
    mainUl,
    `

                  🍴 Welcome to Gastronomia Elegante – an exquisite culinary
                  haven<br /><br /><br /><br />
                  🍽️ Discover Gastronomia Elegante: where artful cuisine meets
                  attentive service. Our chefs craft contemporary
                  interpretations of global classics from locally sourced
                  ingredients. Experience modern ambiance blending comfort, an
                  invitation to savor extraordinary moments through innovative
                  dishes and timeless elegance.

	`
  );
  loadHours(
    mainUl,
    `

                  <p class="sunday">
                    <span>Sunday:</span> <span>8am - 8pm </span>
                  </p>

                  <p class="monday">
                    <span>Monday:</span> <span>6am - 6pm </span>
                  </p>

                  <p class="tuesday">
                    <span>Tuesday:</span> <span>6am - 6pm </span>
                  </p>

                  <p class="wednesday">
                    <span>Wednesday:</span> <span>6am - 6pm </span>
                  </p>

                  <p class="thursday">
                    <span>Thursday:</span> <span>6am - 10pm</span>
                  </p>

                  <p class="friday">
                    <span>Friday:</span> <span>6am - 10pm</span>
                  </p>

                  <p class="saturday">
                    <span>Saturday:</span> <span>8am - 10pm</span>
                  </p>
		`
  );
  loadLocation(mainUl, "Unknown fake street, 10000");
}

function loadGreeting(mainUl, content) {
  let li = createGreeting(content);

  mainUl.append(li);
}

function loadHours(mainUl, content) {
  let li = createHours(content);
  mainUl.append(li);
}

function loadLocation(mainUl, content) {
  let li = createLocation(content);
  mainUl.append(li);
}

function createGreeting(content) {
  let li = createTile("greeting", "");

  addFlowingText(li, content);

  return li;
}

function createHours(content) {
  let li = createTile("hours", "");
  addHeader(li, "Hours");
  addCenteredText(li, content);
  return li;
}
function createLocation(content) {
  let li = createTile("location", "");
  addHeader(li, "Location");
  addCenteredText(li, content);
  return li;
}
