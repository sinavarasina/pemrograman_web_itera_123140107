from interface.cli_view import CliInterface
from interface.handler import LibraryCommandHandler
from interface.repl import LibraryRepl


def main():
    view = CliInterface()
    handler = LibraryCommandHandler(view)
    app = LibraryRepl(handler)

    print("Sistem Manajemen Perpustakaan — Mode CLI")
    print("Data disimpan otomatis ke 'library_data.json'\n")

    app.start()


if __name__ == "__main__":
    main()
