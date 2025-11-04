import { useBooks } from "../../context/BookContext";

export default function BookList({ filter }) {
    const { books, deleteBook } = useBooks();
    const filtered = filter ? books.filter((b) => b.status === filter) : books;

    if (filtered.length === 0) return <p>Tidak ada buku.</p>;

    return (
        <ul className="book-list">
            {filtered.map((b) => (
                <li key={b.id}>
                    <strong>{b.title}</strong> — {b.author} [{b.status}]
                    <button onClick={() => deleteBook(b.id)}>Hapus</button>
                </li>
            ))}
        </ul>
    );
}

