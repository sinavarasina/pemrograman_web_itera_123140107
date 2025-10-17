import { KeyboardShortcuts } from "./keyboard.js";
import { showModal, hideModal } from "./modal-ui.js";
import { renderTask, handleFormSubmit } from "./tasks.js";

document.addEventListener('DOMContentLoaded', () => {
    renderTask();

    const addButton = document.getElementById('addButton');
    const cancelButton = document.getElementById('cancelFormButton');
    const taskForm = document.getElementById('taskForm');
    const searchInput = document.getElementById('searchBar');

    addButton.addEventListener('click', () => showModal('Tambah Tugas'));
    cancelButton.addEventListener('click', hideModal);
    taskForm.addEventListener('submit', handleFormSubmit);
    searchInput.addEventListener('input', renderTask);

    KeyboardShortcuts(searchInput)
});

