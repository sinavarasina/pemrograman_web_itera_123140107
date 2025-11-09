import json
import os


class JsonStorage:
    def __init__(self, filepath="library_data.json"):
        self.filepath = filepath

    def save(self, data: list[dict]):
        try:
            with open(self.filepath, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
        except Exception as e:
            print(f"[Storage Error] Gagal menyimpan data: {e}")

    def load(self):
        if not os.path.exists(self.filepath):
            return []
        try:
            with open(self.filepath, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"[Storage Error] Gagal memuat data: {e}")
            return []
