const url ="https://jsonplaceholder.typicode.com/users/1/todos"
const todosFetch = () =>{
    fetch(url)
    .then(res => res.json())
    .then(data =>{
     displayTodo(data)})
}

const displayTodo = (todos) =>{
    const todoContainer =document.getElementById("todo-container")
    todoContainer.innerHTML = ""

    todos.forEach(todo =>{
        const div = document.createElement("div")
        div.innerHTML = `
        <p>${
            todo.completed == true
             ?`<i class="fa-solid fa-square-check"></i>` :`<i class="fa-regular fa-square-check"></i>`
        }</p>
        <h1>${todo.title}</h1>
        `
        todoContainer.append(div)
    })
}

todosFetch()