
window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const newTodo = document.querySelector('#new-todo');
    const todoMain = document.querySelector('.todo-button');
    const todoToggle = document.querySelector('.todo-popup');
    todoBtn = document.querySelector('.new-todo-button');

    //todo main click
    todoMain.addEventListener('click', () => {
        todoToggle.classList.toggle('active');
    })

    todoBtn.addEventListener('click', () => {
        document.getElementById('new-todo').style.visibility = 'visible';
        todoBtn.style.opacity = 0;
    })

    newTodo.addEventListener('keypress', e => {
        if(e.key === 'Enter' && newTodo.value !== ''){

            const todo = {
                content: newTodo.value,
                done: false,
                createdAt: new Date().getTime()
            }

            todos.push(todo);

            localStorage.setItem('todos', JSON.stringify(todos));

            newTodo.value = '';
            
            DisplayTodos();
        }
    })
    DisplayTodos();
})

const DisplayTodos = () => {
    const todoContainer = document.querySelector('.todo-list-content');

    if (todos.length > 0) {
        todoContainer.innerHTML = '';

        document.getElementById('new-todo').style.visibility = 'visible';
        todoBtn.style.opacity = 0;    

        todos.forEach(todo => {
            let toDo = document.createElement('li');
            let toDoCheckBox = document.createElement('input');
            let toDoText = document.createElement('input');
            let toDoLabel = document.createElement('label');
            let moreOption = document.createElement('div');
            let ellipsis = document.createElement('img');

            toDoCheckBox.setAttribute('type', 'checkbox');
            toDo.className = 'todo-item visible';
            toDoText.className = 'todo-item-title';
            moreOption.className = 'more';
            ellipsis.className = 'ellipsis-icon';
            ellipsis.src = './pics/dots.png';

            toDoText.value = todo.content;
            toDoText.readOnly = true;
            toDoCheckBox.checked = todo.done;

            if (todo.done) {
                toDoText.classList.add('completetask');
            }

            toDoCheckBox.addEventListener('click', e => {
                todo.done = e.target.checked;
                localStorage.setItem('todos', JSON.stringify(todos));
                
                if (todo.done){
                    toDoText.classList.add('completetask');
                } else {
                    toDoText.classList.remove('completetask');
                }

                DisplayTodos();
            })
            
            todoContainer.appendChild(toDo);
            toDo.appendChild(toDoLabel);
            toDoLabel.appendChild(toDoCheckBox);
            toDo.appendChild(toDoText);
            toDo.appendChild(moreOption);
            moreOption.appendChild(ellipsis);
            
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

            editTodoItem.addEventListener('click', e => {
                const input = toDo.querySelector('.todo-item-title');
                input.readOnly = false;
                input.focus();
                input.addEventListener('blur', e => {
                    input.setAttribute('readonly', true);
                    todo.content = e.target.value;
                    localStorage.setItem('todos', JSON.stringify(todos));
                    DisplayTodos();
                })
                input.addEventListener('keypress', e => {
                    if (e.key ==='Enter'){
                        input.setAttribute('readonly', true);
                        todo.content = e.target.value;
                        localStorage.setItem('todos', JSON.stringify(todos));
                    }
                })
            })

            deleteTodoItem.addEventListener('click', e => {
                todos = todos.filter(t => t != todo);
                localStorage.setItem('todos', JSON.stringify(todos));
                DisplayTodos();
            })

            moreOption.addEventListener('click', e => {dropdownListBox.classList.toggle('active')})

            toDo.addEventListener('mouseover', () => {moreOption.classList.add('active')});
            toDo.addEventListener('mouseout', () => {moreOption.classList.remove('active')});
        });
    } else {
        todoContainer.innerHTML = '';
        document.getElementById('new-todo').style.visibility = 'hidden';

        let emptyList = document.createElement('li');
        let emptyTitle = document.createElement('p');
        let newTodoBtn = document.createElement('button');

        emptyList.classList.add('empty');
        emptyTitle.classList.add('empty-title');
        emptyTitle.textContent = 'No todos yet';
        newTodoBtn.classList.add('new-todo-button');
        newTodoBtn.textContent = 'New Todo';

        newTodoBtn.addEventListener('click', () => {
            document.getElementById('new-todo').style.visibility = 'visible';
            newTodoBtn.style.opacity = 0;
        })

        todoContainer.appendChild(emptyList);
        emptyList.appendChild(emptyTitle);
        emptyList.appendChild(newTodoBtn);
    }
}