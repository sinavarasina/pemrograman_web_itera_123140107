import { useState } from "react";
import { useBooks } from "../../context/BookContext";
import "./BookForm.css";

export default function BookForm() {
    const { addBook } = useBooks();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [status, setStatus] = useState("milik");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !author.trim()) {
            alert("Semua kolom wajib diisi!");
            return;
        }
        addBook({ title, author, status });
        setTitle(""); setAuthor(""); setStatus("milik");
    };

    return (
        <form onSubmit={handleSubmit} className="book-form">
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Judul Buku" />
            <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Penulis" />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="milik">Milik</option>
                <option value="baca">Sedang Dibaca</option>
                <option value="beli">Ingin Dibeli</option>
            </select>
            <button type="submit">Tambah</button>
        </form>
    );
}

