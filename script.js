document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const prioritySelect = document.getElementById('priority');
    const dueDateInput = document.getElementById('dueDate');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const task = taskInput.value.trim();
        const priority = prioritySelect.value;
        const dueDate = dueDateInput.value;

        if (task === '') return;

        const taskItem = document.createElement('li');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <span>${task}</span>
            <span>${priority}</span>
            <span>${dueDate}</span>
            <button>Delete</button>
        `;
        taskList.appendChild(taskItem);

        taskInput.value = '';
        prioritySelect.value = 'low';
        dueDateInput.value = '';

        // Add event listener for delete button
        taskItem.querySelector('button').addEventListener('click', function() {
            taskItem.remove();
        });
    });
});
