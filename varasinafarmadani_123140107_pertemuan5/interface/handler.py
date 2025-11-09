from library.library_manager import Library
from library.book import Book
from library.magazine import Magazine


class LibraryCommandHandler:
    def __init__(self, view):
        self.lib = Library()
        self.view = view

    def list_items(self):
        items = self.lib.get_all_items()
        self.view.show_table(items)

    def search(self, keyword):
        results = self.lib.search_items(keyword)
        self.view.show_search_result(results)

    def borrow(self, id):
        success, msg = self.lib.borrow(id)
        self.view.show_message(success, msg)

    def return_item(self, id):
        success, msg = self.lib.return_item(id)
        self.view.show_message(success, msg)

    def add(self):
        print("[INFO] Tambah item baru ke perpustakaan.")
        print("1. Book\n2. Magazine")
        kind = input("Pilih jenis (1/2): ").strip()
        id = int(input("ID: "))
        title = input("Judul: ")
        author = input("Penulis: ")
        if kind == "1":
            pages = int(input("Halaman: "))
            item = Book(id, title, author, pages)
        else:
            issue = input("Edisi: ")
            item = Magazine(id, title, author, issue)
        success, msg = self.lib.add_item(item)
        self.view.show_message(success, msg)

    def delete_item(self, id):
        success, msg = self.lib.delete_item(id)
        self.view.show_message(success, msg)
