import { render, screen, fireEvent } from "@testing-library/react";
import { BookProvider } from "../context/BookContext";
import BookForm from "../components/BookForm/BookForm";

test("menambah buku baru ke localStorage", () => {
    render(<BookProvider><BookForm /></BookProvider>);
    fireEvent.change(screen.getByPlaceholderText(/Judul Buku/i), { target: { value: "1984" } });
    fireEvent.change(screen.getByPlaceholderText(/Penulis/i), { target: { value: "George Orwell" } });
    fireEvent.click(screen.getByText(/Tambah/i));
    expect(localStorage.getItem("books")).toContain("1984");
});

