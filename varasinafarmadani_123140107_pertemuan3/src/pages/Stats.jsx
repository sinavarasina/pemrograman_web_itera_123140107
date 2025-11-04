import { useBookStats } from "../hooks/useBookStats";

export default function Stats() {
    const { total, milik, baca, beli } = useBookStats();
    return (
        <div>
            <h1>Statistik Buku</h1>
            <p>Total Buku: {total}</p>
            <p>Milik: {milik}</p>
            <p>Sedang Dibaca: {baca}</p>
            <p>Ingin Dibeli: {beli}</p>
        </div>
    );
}

