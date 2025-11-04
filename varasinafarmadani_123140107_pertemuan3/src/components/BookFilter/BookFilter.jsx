export default function BookFilter({ value, onChange }) {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="">Semua</option>
            <option value="milik">Milik</option>
            <option value="baca">Sedang Dibaca</option>
            <option value="beli">Ingin Dibeli</option>
        </select>
    );
}

