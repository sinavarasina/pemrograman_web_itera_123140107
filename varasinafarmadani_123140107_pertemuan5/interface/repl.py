from .handler import LibraryCommandHandler


class LibraryRepl:
    def __init__(self, handler: LibraryCommandHandler):
        self.handler = handler
        self._running = True

    def start(self):
        print("=== Sistem Manajemen Perpustakaan Sederhana ===")
        print("\t Varasina Farmadani - 123140107")
        print("Ketik 'help' untuk melihat daftar perintah.\n")

        while self._running:
            try:
                cmd_line = input("> ").strip()
                if not cmd_line:
                    continue

                parts = cmd_line.split()
                command = parts[0].lower()
                args = parts[1:]

                if command in ("exit", "quit"):
                    print("Keluar dari sistem...")
                    self._running = False
                    continue

                self._execute(command, args)
            except KeyboardInterrupt:
                print("\nDihentikan oleh pengguna.")
                break
            except Exception as e:
                print(f"[Error] {e}")

    def _execute(self, command, args):
        commands = {
            "help": self.handler_help,
            "add": self.handler.add,
            "list": self.handler.list_items,
            "search": self.handler.search,
            "borrow": self.handler.borrow,
            "return": self.handler.return_item,
            "delete": self.handler.delete_item,
        }

        if command in commands:
            if command == "help":
                self.handler_help()
            elif command == "search":
                if args:
                    self.handler.search(*args)
                else:
                    print("Gunakan: search <id|title> <kata_kunci>")
            elif command in ("borrow", "return"):
                if args:
                    arg = " ".join(args)
                    if command in ("borrow", "return"):
                        if not arg.isdigit():
                            print("Gunakan angka untuk ID.")
                            return
                        arg = int(arg)
                    commands[command](arg)
                else:
                    print(f"Gunakan: {command} <argumen>")
            else:
                commands[command]()
        else:
            print("Perintah tidak dikenal. Ketik 'help' untuk bantuan.")

    def handler_help(self):
        print("""
Daftar perintah yang tersedia:
  add                              Tambah item baru ke perpustakaan
  list                             Tampilkan seluruh item
  search <id|title> <kata_kunci>   Cari item berdasarkan ID atau judul
  borrow <id>                      Pinjam item berdasarkan ID
  return <id>                      Kembalikan item berdasarkan ID
  delete <id>                      Hapus item berdasarkan ID
  help                             Tampilkan daftar perintah ini
  exit                             Keluar dari aplikasi
""")
