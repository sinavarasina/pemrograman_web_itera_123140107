from abc import ABC, abstractmethod


class LibraryItem(ABC):
    def __init__(self, id, title, author):
        self._id = id
        self._title = title
        self._author = author

    @property
    def title(self):
        return self._title

    @abstractmethod
    def info(self):
        pass
