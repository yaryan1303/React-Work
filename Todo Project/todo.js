let todoList = [];

// On page load, retrieve items from localStorage and populate todoList
window.onload = function() {
    loadTodosFromLocalStorage();
    displayItem();
};

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let DateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let tododate = DateElement.value;

    // Add new todo item to localStorage
    localStorage.setItem(todoItem, tododate);
    todoList.push({ item: todoItem, duedate: tododate });

    // Clear input fields
    inputElement.value = '';
    DateElement.value = '';

    // Display updated list
    displayItem();
}

function displayItem() {
    let ContainerElement = document.querySelector('.todo-container');
    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        let todoitem = todoList[i].item;
        let tododate = todoList[i].duedate;

        newHtml += `
        <div>
            <span class="common">${todoitem}</span>
            <span class="common1">${tododate}</span>
            <button onclick="deleteTodo(${i})" class="btn">Delete</button>
        </div>
        `;
    }
    ContainerElement.innerHTML = newHtml;
}

function deleteTodo(index) {
    let todoitem = todoList[index].item;

    // Remove from localStorage
    localStorage.removeItem(todoitem);

    // Remove from the todoList array
    todoList.splice(index, 1);

    // Update the display
    displayItem();
}

function loadTodosFromLocalStorage() {
    // Loop through localStorage and repopulate the todoList array
    for (let i = 0; i < localStorage.length; i++) {
        let todoitem = localStorage.key(i);
        let tododate = localStorage.getItem(todoitem);
        todoList.push({ item: todoitem, duedate: tododate });
    }
}
