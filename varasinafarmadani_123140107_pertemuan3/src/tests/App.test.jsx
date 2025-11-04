import { render, screen } from "@testing-library/react";
import App from "../App";

test("navigasi dasar menampilkan link Beranda dan Statistik", () => {
    render(<App />);

    expect(screen.getByText(/Beranda/i)).toBeInTheDocument();
    expect(screen.getByText(/Statistik/i)).toBeInTheDocument();
});

