import {
  loadTitle,
  addHeader,
  addFlowingText,
  addCentered,
  createTile,
  resetPage_getClearList,
} from "./tile";
import FoodPic1 from "../img/colorful-sweets-508x339.jpg";
import FoodPic2 from "../img/cookout-508x626.jpg";
import FoodPic3 from "../img/roasted-meat-508x359.jpg";
import FoodPic4 from "../img/sweet-breakfast-508x381.jpg";
import FoodPic5 from "../img/vegetable-salad-in-whit-plate-on-wooden-table-508x345.jpg";

const FOOD_IMG_SOURCES = [FoodPic1, FoodPic2, FoodPic3, FoodPic4, FoodPic5];

export default function loadMenuPage() {
  let mainUl = resetPage_getClearList();
  loadTitle(mainUl, "Menu");

  for (let i = 0; i < FOOD_IMG_SOURCES.length; ++i) {
    let name = `Food${i + 1}`;
    let imgSrc = FOOD_IMG_SOURCES[i];
    loadFood(
      mainUl,
      name,
      `

                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  eum in vero laudantium ad adipisci aut nulla accusantium
                  quasi? Facere recusandae nisi provident magni quis reiciendis
                  quos iusto error ullam?`,

      imgSrc,
      5 + i
    );
  }
}

function loadFood(mainUl, name, desc, imgSrc, price) {
  let li = createFood(name, desc, imgSrc, price);
  mainUl.append(li);
}

function createFood(name, desc, imgSrc, price) {
  let li = createTile("", "food");
  addHeader(li, name);
  addFlowingText(li, desc);
  addCentered(
    li,
    `
                  <img
src="${imgSrc}"
                    alt="food"
/><span class="price">$${price}</span
                >
	`
  );

  return li;
}
