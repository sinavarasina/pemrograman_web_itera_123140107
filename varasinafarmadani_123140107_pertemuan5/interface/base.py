from abc import ABC, abstractmethod


class BaseInterface(ABC):
    @abstractmethod
    def show_table(self, items):
        pass

    @abstractmethod
    def show_search_result(self, results):
        pass

    @abstractmethod
    def show_message(self, success: bool, message: str):
        pass
