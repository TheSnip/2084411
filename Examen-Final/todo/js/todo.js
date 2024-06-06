document.addEventListener('DOMContentLoaded', (e) => {
    const inputTaks = document.getElementById('taskInput');
    const ajoutButton = document.getElementById('addButton');
    const suppButton = document.getElementById('deleteButton');
    const listTaks = document.getElementById('taskList');
    const totalTask = document.getElementById('taskTotal');

    // Positionner le curseur dans le champ taskInput à l'ouverture de la page
    inputTaks.focus();


    // Fonction permet d'ajouter les taches a la liste
    function ajoutTask() {
        const taskText = inputTaks.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', updateDeleteButton);
            li.appendChild(checkbox);
            li.appendChild(document.createTextNode(' ' + taskText));
            li.addEventListener('click', () => {
                li.style.textDecoration = li.style.textDecoration === 'line-through' ? '' : 'line-through';
            });
            listTaks.appendChild(li);
            inputTaks.value = '';
            ajoutButton.disabled = true;
            updateTotalTask();
        }
    }

     // Permet d'activer et desactiver le boutton Ajout en fonction du champs TaksInput
     inputTaks.addEventListener('input', () => {
        ajoutButton.disabled = inputTaks.value.trim() === '';
    });

    // Permet d'ajouter une tache lorsqu'on appui sur le boutton Enter
    inputTaks.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && inputTaks.value.trim() !== '') {
            ajoutTask();
        }
    });

    // Permet d'activer et desactiver le boutton Suppression en fonction des taches selectionnees dans la liste des taches
    function updateDeleteButton() {
        suppButton.disabled = !Array.from(listTaks.querySelectorAll('input[type="checkbox"]')).some(checkbox => checkbox.checked);
    }

    // Permet de supprimer une tache dans la liste des taches
    suppButton.addEventListener('click', () => {
        const checkedTasks = listTaks.querySelectorAll('input[type="checkbox"]:checked');
        checkedTasks.forEach(task => task.parentElement.remove());
        updateDeleteButton();
        updateTotalTask();
    });

    // Mettre à jour le nombre total de taches
    function updateTotalTask() {
        totalTask.textContent = `(${listTaks.children.length})`;
    }

    // Permet d'ajouter une tache lorsqu'on clique sur le boutton Ajout
    ajoutButton.addEventListener('click', ajoutTask);
});

