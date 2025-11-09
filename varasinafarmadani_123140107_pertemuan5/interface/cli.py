from .base import BaseInterface


class CliInterface(BaseInterface):

    def show_table(self, items):
        if not items:
            print("Tidak ada data.")
            return
        print(f"{'ID':<4} {'Tipe':<10} {'Judul':<25} {
              'Penulis':<20} {'Keterangan':<15} {'Status':<10}")
        print("-" * 90)
        for item in items:
            status = "Dipinjam" if item["borrowed"] else "Tersedia"
            print(f"{item['id']:<4} {item['type']:<10} {item['title']:<25} {
                  item['author']:<20} {item['extra']:<15} {status:<10}")

    def show_search_result(self, results):
        if not results:
            print("Tidak ditemukan.")
        else:
            self.show_table(results)

    def show_message(self, success: bool, message: str):
        print(message)
