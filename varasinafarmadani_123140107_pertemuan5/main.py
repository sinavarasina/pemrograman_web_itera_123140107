from interface.cli import CliInterface
from interface.handler import LibraryCommandHandler
from interface.repl import LibraryRepl


def main():
    view = CliInterface()
    handler = LibraryCommandHandler(view)
    app = LibraryRepl(handler)

    print("[INFO] Data disimpan otomatis ke 'library_data.json'\n")
    app.start()


if __name__ == "__main__":
    main()
