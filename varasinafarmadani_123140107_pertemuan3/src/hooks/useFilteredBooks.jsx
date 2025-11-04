import { useBooks } from "../context/BookContext";
export function useFilteredBooks(filter, query) {
    const { books } = useBooks();
    return books.filter(b =>
        (!filter || b.status === filter) &&
        (!query || b.title.toLowerCase().includes(query.toLowerCase()))
    );
}

