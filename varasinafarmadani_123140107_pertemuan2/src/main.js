import { $, fmtTime, sorters, replaceById } from './utils.js';
import { renderTasks, renderNotes, bindDelegation } from './ui.js';
import { Store, loadAll } from './storage.js';
import { Task, Note } from './models.js';
import { fetchTime } from './api.js';

let { tasks, notes } = loadAll();
const els = {
    timeText: $('#timeText'),
    btnSync: $('#btnSync'),
    apiTime: $('#apiTime'),
    statsText: $('#statsText'),
    taskForm: $('#taskForm'),
    taskTitle: $('#taskTitle'),
    taskPriority: $('#taskPriority'),
    taskList: $('#taskList'),
    taskSearch: $('#taskSearch'),
    taskSort: $('#taskSort'),
    btnClearDone: $('#btnClearDone'),
    noteForm: $('#noteForm'),
    noteTitle: $('#noteTitle'),
    noteBody: $('#noteBody'),
    noteList: $('#noteList'),
};

function updateStats() {
    const total = tasks.length;
    const done = tasks.filter(t => t.done).length;
    els.statsText.textContent = `Tugas selesai: ${done} / ${total}`;
    $('#taskStats').textContent = `${total} tugas • ${done} selesai`;
}

function persist() {
    Store.tasks = tasks;
    Store.notes = notes;
    updateStats();
    renderTasks(els.taskList, viewTasks());
    renderNotes(els.noteList, notes);
}

function viewTasks() {
    const q = els.taskSearch.value.trim().toLowerCase();
    const sorted = [...tasks].sort(sorters[els.taskSort.value]);
    return q ? sorted.filter(t => t.title.toLowerCase().includes(q)) : sorted;
}

persist();
els.timeText.textContent = fmtTime();

setInterval(() => {
    els.timeText.textContent = fmtTime();
}, 1000);

els.btnSync.addEventListener('click', async () => {
    els.btnSync.disabled = true;
    els.btnSync.textContent = 'Sync…';
    const dt = await fetchTime();
    els.apiTime.textContent = dt ? new Date(dt).toLocaleString('id-ID') : 'gagal memuat';
    els.btnSync.disabled = false;
    els.btnSync.textContent = 'Sync';
});

els.taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = els.taskTitle.value.trim();
    const priority = els.taskPriority.value;
    if (!title) return;
    const t = new Task({ title, priority });
    tasks = [t, ...tasks];
    els.taskForm.reset();
    persist();
});

bindDelegation(els.taskList, 'li', 'click', (e, li) => {
    const id = li.dataset.id;
    if (e.target.matches('.checkbox')) {
        tasks = tasks.map(t => t.id === id ? { ...t, done: e.target.checked } : t);
        persist();
    } else if (e.target.dataset.action === 'del') {
        tasks = tasks.filter(t => t.id !== id);
        persist();
    } else if (e.target.dataset.action === 'edit') {
        const t = tasks.find(x => x.id === id);
        const title = prompt('Edit judul:', t.title);
        if (title != null && title.trim()) {
            const edited = { ...t, title: title.trim() };
            tasks = replaceById(tasks, edited);
            persist();
        }
    }
});

els.btnClearDone.addEventListener('click', () => {
    const nBefore = tasks.length;
    tasks = tasks.filter(t => !t.done);
    const removed = nBefore - tasks.length;
    if (removed) persist();
});

els.taskSearch.addEventListener('input', () => renderTasks(els.taskList, viewTasks()));
els.taskSort.addEventListener('change', () => renderTasks(els.taskList, viewTasks()));

els.noteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = els.noteTitle.value.trim();
    const body = els.noteBody.value.trim();
    if (!title || !body) return;
    notes = [{ ...(new Note({ title, body })) }, ...notes];
    els.noteForm.reset();
    persist();
});

bindDelegation(els.noteList, 'button[data-action="del-note"]', 'click', (e, btn) => {
    const id = btn.closest('li').dataset.id;
    notes = notes.filter(n => n.id !== id);
    persist();
});

if (!tasks.length && !notes.length) {
    tasks = [
        new Task({ title: 'Cek modul ES6', priority: 'high' }),
        new Task({ title: 'Tulis 3 arrow function', priority: 'med' }),
        new Task({ title: 'Implement localStorage', priority: 'low' }),
    ];
    notes = [
        new Note({ title: 'Rencana', body: 'Tambahkan fitur filter & statistik.' }),
    ];
    persist();
}
