import { useState } from "react";
import BookForm from "../components/BookForm/BookForm";
import BookList from "../components/BookList/BookList";
import BookFilter from "../components/BookFilter/BookFilter";
import "./Home.css";

export default function Home() {
    const [filter, setFilter] = useState("");
    const [query, setQuery] = useState("");

    return (
        <div className="home">
            <h1>Manajemen Buku Pribadi</h1>
            <BookForm />
            <input
                type="text"
                placeholder="Cari buku..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ margin: "1rem 0", padding: "0.5rem", width: "60%" }}
            />
            <BookFilter value={filter} onChange={setFilter} />
            <BookList filter={filter} query={query} />
        </div>
    );
}

