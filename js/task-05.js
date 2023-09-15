const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output")
console.log(inputEl)
console.log(outputEl)

const inputFunction = (event) => {
    event.currentTarget.value = '' ? "mamba" : false;
    outputEl.textContent = event.currentTarget.value;
}


inputEl.addEventListener("input", inputFunction)

