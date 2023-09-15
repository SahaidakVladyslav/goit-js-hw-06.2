const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients')
const appendItens = list => {


  for (let i = 0; i < list.length; i += 1) {

    const item = document.createElement("li");
    item.textContent = list[i];
    item.classList = "item";
    listEl.append(item);

  }

}

appendItens(ingredients);