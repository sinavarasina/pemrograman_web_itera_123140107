export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

export const fmtTime = (ts = Date.now()) => new Date(ts).toLocaleString('id-ID');
export const clamp = (n, min = 0, max = 1) => Math.min(max, Math.max(min, n));

export const byId = (arr, id) => arr.find(x => x.id === id);
export const replaceById = (arr, item) => arr.map(x => x.id === item.id ? item : x);

export const pick = (obj, ...keys) => {
    const out = {};
    for (const k of keys) out[k] = obj[k];
    return out;
};

export const sorters = {
    created_asc: (a, b) => a.createdAt - b.createdAt,
    created_desc: (a, b) => b.createdAt - a.createdAt,
    priority: (a, b) => ({ high: 3, med: 2, low: 1 }[b.priority] - ({ high: 3, med: 2, low: 1 }[a.priority])),
};
