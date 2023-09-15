const increasBtnEl = document.querySelector('button[data-action="increment"]')
const valueEl = document.querySelector("#value")
const decreaseBtnEl = document.querySelector('button[data-action="decrement"]');





let number = 0;

console.log(increasBtnEl)

console.log(valueEl)

console.log(decreaseBtnEl)

const increaseFunction = () => {

    number += 1;
    valueEl.textContent = number;

}
const decreaseFunction = () => {
    number -= 1;
    valueEl.textContent = number;
}

increasBtnEl.addEventListener("click", increaseFunction);
decreaseBtnEl.addEventListener("click", decreaseFunction);
