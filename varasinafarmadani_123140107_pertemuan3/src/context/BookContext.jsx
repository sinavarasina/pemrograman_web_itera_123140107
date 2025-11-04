import { createContext, useContext, useState, useEffect } from "react";

const BookContext = createContext();

export function BookProvider({ children }) {
    const [books, setBooks] = useState(() => {
        const stored = localStorage.getItem("books");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => localStorage.setItem("books", JSON.stringify(books)), [books]);

    const addBook = (book) => setBooks([...books, { id: Date.now(), ...book }]);
    const updateBook = (id, newData) =>
        setBooks(books.map((b) => (b.id === id ? { ...b, ...newData } : b)));
    const deleteBook = (id) => setBooks(books.filter((b) => b.id !== id));

    return (
        <BookContext.Provider value={{ books, addBook, updateBook, deleteBook }}>
            {children}
        </BookContext.Provider>
    );
}

export const useBooks = () => useContext(BookContext);

