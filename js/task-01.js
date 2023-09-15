const itemsArrayEl = Array.from(document.querySelectorAll(".item"));
const logosArrayEl = Array.from(document.querySelectorAll("h2"));

const logoContentFun = number => logosArrayEl[number].textContent;
const quantityItemsFun = number => itemsArrayEl[number].lastElementChild.children.length

console.log(`Number of categories: ${itemsArrayEl.length}`)
console.log(``)
console.log(`Category: ${logoContentFun(0)}`)
console.log(`Elements: ${quantityItemsFun(0)}`)
console.log(``);
console.log(`Category: ${logoContentFun(1)}`);
console.log(`Elements: ${quantityItemsFun(1)}`);
console.log(``);
console.log(`Category: ${logoContentFun(2)}`);
console.log(`Elements: ${quantityItemsFun(2)}`);