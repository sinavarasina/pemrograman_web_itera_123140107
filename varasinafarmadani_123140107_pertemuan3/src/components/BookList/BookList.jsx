import { useState } from "react";
import { useBooks } from "../../context/BookContext";
import "./BookList.css";

export default function BookList({ filter, query }) {
    const { books, deleteBook, updateBook } = useBooks();
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({ title: "", author: "", status: "milik" });

    const filtered = books.filter(b =>
        (!filter || b.status === filter) &&
        (!query || b.title.toLowerCase().includes(query.toLowerCase()) || b.author.toLowerCase().includes(query.toLowerCase()))
    );

    if (filtered.length === 0) return <p>Tidak ada buku.</p>;

    const startEdit = (book) => {
        setEditingId(book.id);
        setEditData({ title: book.title, author: book.author, status: book.status });
    };

    const saveEdit = (id) => {
        if (!editData.title.trim() || !editData.author.trim()) {
            alert("Kolom tidak boleh kosong!");
            return;
        }
        updateBook(id, editData);
        setEditingId(null);
    };

    return (
        <ul className="book-list">
            {filtered.map((b) => (
                <li key={b.id}>
                    {editingId === b.id ? (
                        <>
                            <input
                                value={editData.title}
                                onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                                placeholder="Judul Buku"
                            />
                            <input
                                value={editData.author}
                                onChange={(e) => setEditData({ ...editData, author: e.target.value })}
                                placeholder="Penulis"
                            />
                            <select
                                value={editData.status}
                                onChange={(e) => setEditData({ ...editData, status: e.target.value })}
                            >
                                <option value="milik">Milik</option>
                                <option value="baca">Sedang Dibaca</option>
                                <option value="beli">Ingin Dibeli</option>
                            </select>
                            <button onClick={() => saveEdit(b.id)}>Simpan</button>
                            <button onClick={() => setEditingId(null)}>Batal</button>
                        </>
                    ) : (
                        <>
                            <strong>{b.title}</strong> — {b.author} [{b.status}]
                            <div>
                                <button onClick={() => startEdit(b)}>Ubah</button>
                                <button onClick={() => deleteBook(b.id)}>Hapus</button>
                            </div>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
}

