from .base import LibraryItem


class Book(LibraryItem):
    def __init__(self, id, title, author, pages):
        super().__init__(id, title, author)
        self._pages = pages

    def info(self):
        return f"[Book] {self._title} oleh {self._author}, {self._pages} halaman"
