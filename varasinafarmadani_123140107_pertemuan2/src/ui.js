import { $, $$, fmtTime } from './utils.js';

export function renderTasks(listEl, tasks) {
    listEl.innerHTML = tasks.map(t => `
    <li data-id="${t.id}" class="${t.done ? 'done' : ''}">
      <input type="checkbox" class="checkbox" ${t.done ? 'checked' : ''} />
      <div>
        <div><strong>${t.title}</strong></div>
        <div class="muted">${fmtTime(t.createdAt)}</div>
      </div>
      <div class="actions">
        <span class="badge ${t.priority}">${t.priority}</span>
        <button data-action="edit" class="ghost">Edit</button>
        <button data-action="del" class="ghost">Hapus</button>
      </div>
    </li>
  `).join('');
}

export function renderNotes(listEl, notes) {
    listEl.innerHTML = notes.map(n => `
    <li data-id="${n.id}" style="grid-template-columns: 1fr auto;">
      <div>
        <div><strong>${n.title}</strong></div>
        <div class="muted">${n.body}</div>
      </div>
      <div class="actions">
        <button data-action="del-note" class="ghost">Hapus</button>
      </div>
    </li>
  `).join('');
}

export const bindDelegation = (root, sel, type, handler) => {
    root.addEventListener(type, (e) => {
        const t = e.target.closest(sel);
        if (t) handler(e, t);
    });
};
