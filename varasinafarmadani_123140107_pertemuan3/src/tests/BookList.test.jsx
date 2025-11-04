import { render, screen } from "@testing-library/react";
import { BookProvider } from "../context/BookContext";
import BookList from "../components/BookList/BookList";

test("menampilkan pesan jika daftar buku kosong", () => {
    render(
        <BookProvider>
            <BookList />
        </BookProvider>
    );
    expect(screen.getByText(/Tidak ada buku/i)).toBeInTheDocument();
});

