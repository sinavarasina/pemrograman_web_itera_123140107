import { render, screen, fireEvent } from "@testing-library/react";
import BookFilter from "../components/BookFilter/BookFilter";

test("mengubah filter memanggil onChange dengan nilai baru", () => {
    const mockChange = vi.fn();
    render(<BookFilter value="" onChange={mockChange} />);

    fireEvent.change(screen.getByDisplayValue(/Semua/i), {
        target: { value: "baca" },
    });

    expect(mockChange).toHaveBeenCalledWith("baca");
});

