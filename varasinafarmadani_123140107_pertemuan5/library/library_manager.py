from .book import Book
from .magazine import Magazine
from .base import LibraryItem


class Library:
    def __init__(self):
        # SoA (Struct of Arrayy) sebagai kejahilan kecil wkwkwk,
        # izin buat begini (coba coba)
        self._ids = []
        self._titles = []
        self._authors = []
        self._types = []
        self._extra = []
        self._is_borrowed = []
        self._load_from_storage()

    def _load_from_storage(self):
        data = self._storage.load()
        for item in data:
            self._ids.append(item["id"])
            self._titles.append(item["title"])
            self._authors.append(item["author"])
            self._types.append(item["type"])
            self._extra.append(item["extra"])
            self._is_borrowed.append(item["borrowed"])

    def _sync_storage(self):
        self._storage.save(self.get_all_items())

    def get_all_items(self):
        return [
            {
                "id": self._ids[i],
                "title": self._titles[i],
                "author": self._authors[i],
                "type": self._types[i],
                "extra": self._extra[i],
                "borrowed": self._is_borrowed[i],
            }
            for i in range(len(self._ids))
        ]

    def search_items(self, keyword):
        results = []
        for i in range(len(self._titles)):
            if keyword.lower() in self._titles[i].lower():
                results.append({
                    "id": self._ids[i],
                    "title": self._titles[i],
                    "author": self._authors[i],
                    "type": self._types[i],
                    "extra": self._extra[i],
                    "borrowed": self._is_borrowed[i],
                })
        return results

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
        self._sync_storage()
        return True, f"[OK] Item '{item.title}' berhasil ditambahkan."

    def delete_item(self, id):
        if id in self._ids:
            idx = self._ids.index(id)
            for arr in (
                self._ids,
                self._titles,
                self._authors,
                self._types,
                self._extra,
                self._is_borrowed,
            ):
                arr.pop(idx)
            self._sync_storage()
            return True, f"[OK] Item dengan ID {id} dihapus."
        return False, f"[WARN] ID {id} tidak ditemukan."

    def borrow(self, id):
        if id in self._ids:
            idx = self._ids.index(id)
            if not self._is_borrowed[idx]:
                self._is_borrowed[idx] = True
                self._sync_storage()
                return True, f"[OK] '{self._titles[idx]}' berhasil dipinjam."
            return False, f"[WARN] '{self._titles[idx]}' sudah dipinjam."
        return False, f"[ERROR] ID {id} tidak ditemukan."

    def return_item(self, id):
        if id in self._ids:
            idx = self._ids.index(id)
            if self._is_borrowed[idx]:
                self._is_borrowed[idx] = False
                self._sync_storage()
                return True, f"[OK] '{self._titles[idx]}' dikembalikan."
            return False, f"[WARN] '{self._titles[idx]}' belum dipinjam."
        return False, f"[ERROR] ID {id} tidak ditemukan."
