import { render, screen } from "@testing-library/react";
import { BookProvider } from "../context/BookContext";
import Stats from "../pages/Stats";

test("menampilkan statistik awal dengan nilai nol", () => {
    render(
        <BookProvider>
            <Stats />
        </BookProvider>
    );
    expect(screen.getByText(/Total Buku: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/Milik: 0/i)).toBeInTheDocument();
});

