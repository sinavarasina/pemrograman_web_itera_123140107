# library/library_manager.py
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

    def list_items(self):
        print("\n=== Koleksi Perpustakaan ===")
        for i in range(len(self._ids)):
            status = "Dipinjam" if self._is_borrowed[i] else "Tersedia"
            print(f"{self._types[i]} | {self._titles[i]} oleh {self._authors[i]} "
                  f"({self._extra[i]}) - {status}")

    def search(self, keyword):
        print(f"\nHasil pencarian untuk '{keyword}':")
        found = False
        for i in range(len(self._titles)):
            if keyword.lower() in self._titles[i].lower():
                print(
                    f"  {self._types[i]} - {self._titles[i]} oleh {self._authors[i]}")
                found = True
        if not found:
            print("  Tidak ditemukan.")

    def borrow(self, id):
        if id in self._ids:
            idx = self._ids.index(id)
            if not self._is_borrowed[idx]:
                self._is_borrowed[idx] = True
                print(f"{self._titles[idx]} berhasil dipinjam.")
            else:
                print(f"{self._titles[idx]} sudah dipinjam.")
        else:
            print("ID tidak ditemukan.")

    def return_item(self, id):
        if id in self._ids:
            idx = self._ids.index(id)
            if self._is_borrowed[idx]:
                self._is_borrowed[idx] = False
                print(f"{self._titles[idx]} dikembalikan.")
            else:
                print(f"{self._titles[idx]} belum dipinjam.")
        else:
            print("ID tidak ditemukan.")
