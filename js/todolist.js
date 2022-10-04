window.addEventListener('load', () => {
    const todoMain = document.querySelector('.todo-button');
    const todoToggle = document.querySelector('.todo-popup');
    const todoBtn = document.querySelector('.new-todo-button');
    const todoContainer = document.querySelector('.todo-list-content');
    const todoNewList = document.querySelector('#new-todo');
    const completeList = document.getElementsByClassName('todo-item-title');

    //todo main click
    todoMain.addEventListener('click', () => {
        todoToggle.classList.toggle('active');
    })

    todoBtn.addEventListener('click', () => {
        document.getElementById('new-todo').style.visibility = 'visible';
        todoBtn.style.opacity = 0;
    })

    todoNewList.addEventListener('keypress', (event) =>{
        if(event.key === 'Enter' && todoNewList.value !== ''){
            let emptyList = document.getElementsByClassName('empty');
            emptyList[0].style.display = 'none';
            
            let toDo = document.createElement('li');
            let toDoCheckBox = document.createElement('input');
            let toDoText = document.createElement('span');
            let toDoLabel = document.createElement('label');
            let moreOption = document.createElement('div');
            let ellipsis = document.createElement('img');

            todoContainer.dataset.total = Number(todoContainer.dataset.total) + 1;
            toDoCheckBox.id = todoContainer.dataset.total;

            toDoCheckBox.setAttribute('type', 'checkbox');
            toDo.className = 'todo-item visible';
            toDoText.className = 'todo-item-title';
            moreOption.className = 'more';
            ellipsis.className = 'ellipsis-icon';
            ellipsis.src = './pics/dots.png';

            toDoText.innerHTML = todoNewList.value;

            todoContainer.appendChild(toDo);
            toDo.appendChild(toDoLabel);
            toDoLabel.appendChild(toDoCheckBox);
            toDo.appendChild(toDoText);
            toDo.appendChild(moreOption);
            moreOption.appendChild(ellipsis);

            todoNewList.value = '';
            
            // dropdown listbox ---------
            let dropdownListBox = document.createElement('div');
            let unorderListbox = document.createElement('ul');
            let editTodoItem = document.createElement('li');
            let span1 = document.createElement('span');
            let deleteTodoItem = document.createElement('li');
            let span2 = document.createElement('span');

            dropdownListBox.className = 'dropdown-todo-edit-delete';
            editTodoItem.className = 'edit-del';
            editTodoItem.id = 'edit-todo-item';
            deleteTodoItem.className = 'edit-del';
            deleteTodoItem.id = 'delete-todo-item'
            span1.innerHTML = 'Edit';
            span2.innerHTML = 'Delete';
            span1.className = 'edit-del-label';
            span2.className = 'edit-del-label';

            moreOption.appendChild(dropdownListBox);
            dropdownListBox.appendChild(unorderListbox);
            unorderListbox.appendChild(editTodoItem);
            editTodoItem.appendChild(span1);
            unorderListbox.appendChild(deleteTodoItem);
            deleteTodoItem.appendChild(span2);
            //--------------------------
        }

    })

    document.addEventListener('click', (event) => {
        let selectedItem = event.target.id;   
        selectedItem -= 1;
        
        if (selectedItem !== -1 && selectedItem !== NaN){
            completeList[selectedItem].classList.toggle('completetask');
        }
    })
    
})

function onmousehover() {
    var todoItem = document.querySelectorAll('.todo-item');    

    todoItem.forEach((todoList) => {
        const label =  todoList.querySelector('.more');
        const dropdown = todoList.querySelector('.dropdown-todo-edit-delete');
        const deleteItem = todoList.querySelector('#delete-todo-item');

        todoList.addEventListener('mouseover', () => {label.classList.add('active')});
        todoList.addEventListener('mouseout', () => {label.classList.remove('active')});
        label.addEventListener('click', () => {dropdown.classList.add('active')});
        deleteItem.addEventListener('click', () => {console.log('delete')});
        
    });
}