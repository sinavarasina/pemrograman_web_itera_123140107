import { useState } from "react";
import BookForm from "../components/BookForm/BookForm";
import BookList from "../components/BookList/BookList";
import BookFilter from "../components/BookFilter/BookFilter";

export default function Home() {
    const [filter, setFilter] = useState("");
    return (
        <div>
            <h1>Manajemen Buku Pribadi</h1>
            <BookForm />
            <BookFilter value={filter} onChange={setFilter} />
            <BookList filter={filter} />
        </div>
    );
}

