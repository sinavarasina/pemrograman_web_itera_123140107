from .book import Book
from .magazine import Magazine
from .base import LibraryItem


class Library:
    def __init__(self):
        self._ids = []
        self._titles = []
        self._authors = []
        self._types = []
        self._extra = []
        self._is_borrowed = []

    def add_item(self, item: LibraryItem):
        self._ids.append(item._id)
        self._titles.append(item.title)
        self._authors.append(item._author)
        self._types.append(type(item).__name__)
        if isinstance(item, Book):
            self._extra.append(f"{item._pages} halaman")
        elif isinstance(item, Magazine):
            self._extra.append(f"Edisi {item._issue}")
        else:
            self._extra.append("-")
        self._is_borrowed.append(False)

    def get_all_items(self):
        data = []
        for i in range(len(self._ids)):
            data.append({
                "id": self._ids[i],
                "title": self._titles[i],
                "author": self._authors[i],
                "type": self._types[i],
                "extra": self._extra[i],
                "borrowed": self._is_borrowed[i],
            })
        return data

    def search_items(self, keyword):
        result = []
        for i in range(len(self._titles)):
            if keyword.lower() in self._titles[i].lower():
                result.append({
                    "id": self._ids[i],
                    "title": self._titles[i],
                    "author": self._authors[i],
                    "type": self._types[i],
                    "extra": self._extra[i],
                    "borrowed": self._is_borrowed[i],
                })
        return result

    def borrow(self, id):
        if id in self._ids:
            idx = self._ids.index(id)
            if not self._is_borrowed[idx]:
                self._is_borrowed[idx] = True
                return True, f"{self._titles[idx]} berhasil dipinjam."
            return False, f"{self._titles[idx]} sudah dipinjam."
        return False, "ID tidak ditemukan."

    def return_item(self, id):
        if id in self._ids:
            idx = self._ids.index(id)
            if self._is_borrowed[idx]:
                self._is_borrowed[idx] = False
                return True, f"{self._titles[idx]} dikembalikan."
            return False, f"{self._titles[idx]} belum dipinjam."
        return False, "ID tidak ditemukan."
