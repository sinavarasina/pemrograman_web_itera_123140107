export const KeyboardShortcuts = (searchInput) => {
    document.addEventListener('keydown', e => {
        const active = document.activeElement;
        const isTyping =
            active.tagName === 'INPUT' ||
            active.tagName === 'TEXTAREA' ||
            active.tagName === 'SELECT' ||
            active.isContentEditable;

        if (e.key === '/' && !isTyping) {
            e.preventDefault();
            searchInput.focus();
        }

        if (e.key === 'Escape' && active === searchInput) {
            e.preventDefault();
            searchInput.blur();
        }
    });
};
