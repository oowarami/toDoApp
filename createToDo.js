// Get the modal element
let modal = document.getElementById("modal");
// Get open modal button
let modalBtn = document.getElementById("modalBtn");
// Get close modal button
let closeBtn = document.getElementById("closeBtn");

// Listen for open click
modalBtn.addEventListener("click", openModal);

// fuction to open the modal
function openModal() {
    modal.style.display = "block";
}

// Listen for the close click
closeBtn.addEventListener("click", closeModal);

// function to close the modal 
function closeModal() {
    modal.style.display = "none";
}

// function to add to-do item
const todos = []

function addTodo(e) {
    e.preventDefault(); // Cancel the native event
    e.stopPropagation()
    const title = document.getElementById('todo-title').value;
    const content = document.getElementById('todo-content').value

    const todo = {
        title,
        content
    }

    todos.push(todo)

    // call the display function after save button has been clicked
    displayTodo();
}

// call this function on click of save button
// listen for save click
const save = document.getElementById('save')
save.addEventListener("click", addTodo, false);
let mainTodo = document.getElementById('mainTodo');

console.log('main===>', mainTodo);


// function to display all todos;
function displayTodo() {
    // loop through the todos array
    for (index = 0; index < todos.length; index++) {
        // if the array  = 0 then the display function does not display
        if (todos.length == 0) {
            return "No to-do item";
        } else {
            // if there are todo in the array, append the main content by creating a div then using .title or .content
            const todo = todos[index];
            // var parser = new DOMParser();
            var markup = `
            <div>
            <h3>${todo.title}</h3>
            <p>${todo.content}</p>
            </div>
            `;
        }
        // let parsedHtml = parser.parseFromString(markup, 'text/html')
        mainTodo.innerHTML = markup;
        // html += "<div id=" + boardBox[i] + " class='col-md-4'>" + boardBox[i] + "</div>"
    }
}