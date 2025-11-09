from .base import LibraryItem


class Magazine(LibraryItem):
    def __init__(self, id, title, author, issue):
        super().__init__(id, title, author)
        self._issue = issue

    def info(self):
        return f"[Magazine] {self._title} oleh {self._author}, Edisi {self._issue}"
