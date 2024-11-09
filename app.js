
const input = document.querySelector(".input");
const submit = document.querySelector(".button");

const container = document.querySelector(".todos");

const arrayOfTodos = [];

function addTodo() {
  arrayOfTodos.push(input.value);

  if (input.value === "") {
    return;
  } else {
    render();
  }

  console.log(arrayOfTodos);
  input.value = "";
}

function deletTodo(index) {
  for (let i = 0; i < arrayOfTodos.length; i++) {
    if (+index === i) {
      arrayOfTodos.splice(arrayOfTodos.indexOf(arrayOfTodos[i]), 1);
    }
  }
  render();

  console.log(arrayOfTodos);
}

function render() {
  container.innerHTML = "";
  for (let i = 0; i < arrayOfTodos.length; i++) {
    container.innerHTML += `
        <div
        class="singleTodo flex p-3 border border-blue-200 rounded-sm items-center justify-between" onclick=deletTodo("${i}")
      >
        <h1 class="text-black-400">${arrayOfTodos[i]}</h1>
        <button class="bg-red-400 p-2 rounded-sm text-white">DELETE</button>
      </div>
        `;
  }
}

submit.addEventListener("click", addTodo);