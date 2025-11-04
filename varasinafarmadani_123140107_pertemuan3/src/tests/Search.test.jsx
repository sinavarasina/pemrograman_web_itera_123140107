import { render, screen, fireEvent } from "@testing-library/react";
import { BookProvider } from "../context/BookContext";
import Home from "../pages/Home";

test("fitur pencarian memfilter daftar buku sesuai judul", () => {
    localStorage.setItem("books", JSON.stringify([
        { id: 1, title: "Naruto", author: "Kishimoto", status: "milik" },
        { id: 2, title: "One Piece", author: "Oda", status: "baca" }
    ]));

    render(
        <BookProvider>
            <Home />
        </BookProvider>
    );

    fireEvent.change(screen.getByPlaceholderText(/Cari buku/i), {
        target: { value: "naru" },
    });

    expect(screen.getByText(/Naruto/i)).toBeInTheDocument();
    expect(screen.queryByText(/One Piece/i)).not.toBeInTheDocument();
});

