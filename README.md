<details>
<summary><strong>Daftar Isi</strong></summary>

- [Tugas Praktikum 1](#tugas-praktikum-1)
  - [Aplikasi Manajemen Tugas Mahasiswa (berbasis web)](#aplikasi-manajemen-tugas-mahasiswa-berbasis-web)
  - [1) Deskripsi Singkat](#1-deskripsi-singkat)
  - [2) Daftar fitur yang telah diimplementasikan](#2-daftar-fitur-yang-telah-diimplementasikan)
  - [3) ScreenShot](#3-screenshot)
  - [4) Cara menjalankan](#4-cara-menjalankan)
  - [5) Penjelasan teknis tentang penggunaan localStorage dan validasi form](#5-penjelasan-teknis-tentang-penggunaan-localstorage-dan-validasi-form)
- [Tugas Praktikum 2](#tugas-praktikum-2)
  - [Personal Dashboard — JavaScript Next-Gen (ES6+)](#personal-dashboard--javascript-nextgen-es6)
  - [1) Deskripsi Singkat](#1-deskripsi-singkat-1)
  - [2) Implementasi Fitur ES6+ yang Diminta](#2-implementasi-fitur-es6-yang-diminta)
  - [3) Cara Menjalankan](#3-cara-menjalankan)
  - [4) Struktur Proyek](#4-struktur-proyek)
  - [5) Screenshot](#5-screenshot)
  - [6) Checklist Kesesuaian Tugas](#6-checklist-kesesuaian-tugas)
  - [7) Catatan Teknis](#7-catatan-teknis)

</details>

---

# [Tugas Praktikum 1](https://github.com/sinavarasina/pemrograman_web_itera_123140107/tree/main/varasinafarmadani_123140107_pertemuan1)

---

## Aplikasi Manajemen Tugas Mahasiswa (berbasis web)

## 1) Deskripsi Singkat
Aplikasi ini bernama IAMT,
Aplikasi yang dibuat untuk membantu mahasiswa mengelola aktivitas akademik mereka. 
Aplikasi ini interaktif, fungsional, dan dapat menyimpan data secara lokal.
Aplikasi dibuat dengan HTML yang Semantik, dan JS ES6+.
Menggunakan Color Palete Catppuccin Mocha, dengan popup/modal untuk tambah & edit tugas.
Shortcut key seperti Search dengan '/' dan 'ESC' untuk keluar dari search.
adapun fitur aplikasi diciptakan untuk memenuhi Persyaratan & Fitur Wajib Aplikasi dari tugas sebagai berikut

## 2) Daftar fitur yang telah diimplementasikan
| **No** | **Persyaratan / Fitur** | **Checklist** | **Implementasi** |
| :----: | :--- | :---: | :--- |
| 1 | **Interaktif:** Pengguna dapat menambah, mengedit, menandai selesai, dan menghapus tugas | ✅ | Menggunakan event listener di `tasks.js` (`addEventListener` untuk tombol `Tambah`, `Edit`, `Set Selesai`, dan `Hapus`). Semua perubahan langsung terlihat di DOM tanpa reload. |
| 2 | **Penyimpanan Lokal:** Gunakan `localStorage` untuk menyimpan data pengguna | ✅ | Semua data tugas disimpan dalam `localStorage` menggunakan `getTasks()` dan `saveTasks()` di `storage.js`. Data tetap ada setelah browser ditutup. |
| 3 | **Validasi Form:** Input pengguna diverifikasi agar tidak kosong dan deadline valid | ✅ | Divalidasi manual di `handleFormSubmit()` pada `tasks.js`. Field wajib diisi dan tanggal tidak boleh sebelum hari ini, dengan popup alert (meski sudah dihandle dengan html juga) |
| 4 | **Menambahkan tugas baru:** Informasi terdiri dari nama tugas, mata kuliah, dan deadline | ✅ | Fitur “Tambah Tugas” dibuka lewat modal (`dialog`), diisi oleh form dengan tiga input wajib (`taskTitle`, `taskCourse`, `taskDeadline`). |
| 5 | **Menandai tugas sebagai selesai / belum selesai** | ✅ | Tombol `"Set Selesai"` / `"Set Belum Selesai"` memanggil `toggleTask(id)` di `tasks.js`, mengubah properti `done` dan memperbarui tampilan serta statistik. |
| 6 | **Menghapus tugas yang sudah tidak diperlukan** | ✅ | Tombol `"Hapus"` memanggil `deleteTask(id)` dengan konfirmasi `confirm()`. Data dihapus dari `localStorage` lalu diperbarui di UI. |
| 7 | **Filter atau pencarian tugas (berdasarkan status atau mata kuliah)** | ✅ | Fitur pencarian langsung (`input type="search"`) di `main.js`. Fungsi `renderTask()` menyaring daftar dengan `.filter()` berdasarkan teks pencarian judul tugas atau nama mata kuliah. |
| 8 | **Menampilkan jumlah tugas yang belum selesai** | ✅ | Statistik di `<aside id="stats">` diperbarui lewat `updateStats(tasks)` — menampilkan total, selesai, dan belum selesai secara real-time. |
| 9 | **Validasi form untuk memastikan data yang dimasukkan valid** | ✅ | Validasi gabungan HTML (`required`) dan JS (tanggal tidak boleh lewat). Input tidak dapat disubmit jika tidak ada isinya. |

---

## 3) ScreenShot
### UI (landscape & portait)
![UI landscape](https://raw.githubusercontent.com/sinavarasina/pemrograman_web_itera_123140107/refs/heads/main/screenshoot/tugas1/Screenshot_2025-10-17_18-56-34.png)
![UI potrait](https://raw.githubusercontent.com/sinavarasina/pemrograman_web_itera_123140107/refs/heads/main/screenshoot/tugas1/Screenshot_2025-10-17_18-56-48.png)
### Fitur CRUD dasar
![Tambah](https://raw.githubusercontent.com/sinavarasina/pemrograman_web_itera_123140107/refs/heads/main/screenshoot/tugas1/Screenshot_2025-10-17_19-35-09.png)
![Edit](https://raw.githubusercontent.com/sinavarasina/pemrograman_web_itera_123140107/refs/heads/main/screenshoot/tugas1/Screenshot_2025-10-17_19-50-14.png)
![Hapus](https://raw.githubusercontent.com/sinavarasina/pemrograman_web_itera_123140107/refs/heads/main/screenshoot/tugas1/Screenshot_2025-10-17_19-38-09.png)
### Validation
![Nama Tidak Boleh Kosong](https://raw.githubusercontent.com/sinavarasina/pemrograman_web_itera_123140107/refs/heads/main/screenshoot/tugas1/Screenshot_2025-10-17_18-39-01.png)
![Tanggal Harus Sesudah Hari Ini](https://raw.githubusercontent.com/sinavarasina/pemrograman_web_itera_123140107/refs/heads/main/screenshoot/tugas1/Screenshot_2025-10-17_18-39-51.png)
### Search
![Pencarian](https://raw.githubusercontent.com/sinavarasina/pemrograman_web_itera_123140107/refs/heads/main/screenshoot/tugas1/Screenshot_2025-10-17_19-35-34.png)
### Status 
![Status](https://raw.githubusercontent.com/sinavarasina/pemrograman_web_itera_123140107/refs/heads/main/screenshoot/tugas1/Screenshot_2025-10-17_19-37-03.png)

---

## 4) Cara menjalankan
> Sebelum menjalankan pastikan anda sudah menginstall node.js dan npm

1.  clone repo ini
    ```bash
    git clone https://github.com/sinavarasina/pemrograman_web_itera_123140107.git
    ```
2.  cd ke repo nya
    ```bash
    cd pemrograman_web_itera_123140107
    ```
3.  jalankan aplikasi dengan serve
    ```bash
    npx serve varasinafarmadani_123140107_pertemuan1
    ```
4. buka server local host yang di berikan  
serve umumnya akan menjalankan server bagi web yang dihosting pada port 3000 seperti ini  
![serve](https://raw.githubusercontent.com/sinavarasina/pemrograman_web_itera_123140107/refs/heads/main/screenshoot/tugas1/Screenshot_2025-10-17_20-00-53.png)  
buka dengan browser yang anda gunakan.  

---

## 5) Penjelasan teknis tentang penggunaan localStorage dan validasi form
Penggunaaan localStorage disini adalah untuk menyimpan data, kita menyimpan data json dalam localStorage, lalu kita juga dapat meload json & parse kembali.
### localStorage
berikut adalah kode yang menyimpan/memuat JSON pada localStorage
```javascript
export const getTasks = () => JSON.parse(localStorage.getItem('tasks')) || [];
export const saveTasks = tasks => localStorage.setItem('tasks', JSON.stringify(tasks));
```
**Penjelasan getTasks**  
digunakan untuk memuat data, jadi data bernama tasks pada localStorage di load dengan fungsi .getItem, lalu karena datanya berbentuk json maka kita parsing lalu simpan disuatu variable.
namun jika data tidak ditemukan maka nilainya adalah null, dapat dilihat pada operator or || lalu fallback ke [].  
**Penjelasan saveTasks**  
digunakan untuk menyimpan tasks, fungsi ini menerima parameter tasks, lalu menyimpan tasks yang juga sudah di stringify sebagai json dengan .setItem.

### Validasi Form
disini sebenarnya saya memiliki 2 pengaman untuk memvalidasi input (namun tidak dengan yang sudah ada di database)
saya menggunakan fitur bawaan HTML yaitu input required 
berikut kode sebagai contoh
```HTML
<label for="taskTitle">Judul Tugas</label>
<input id="taskTitle" name="taskTitle" required>

<label for="taskCourse">Matakuliah</label>
<input id="taskCourse" name="taskCourse" required>

<label for="taskDeadline">Deadline</label>
<input type="date" id="taskDeadline" name="taskDeadline" required>
```
bagian required pada html diatas pada input mencegah input kosong, sehingga tidak perlu khawatir terkait input kosong pasa judul dan mata kuliah.
namun mengingat ini tugas dasar javascript,
maka saya menyiapkan kode js nya yang berada pada bagian `handleFormSubmit()` yaitu sebagai berikut
```javascript
    if (!title) {
        isValid = false;
        message += '- Judul tugas wajib diisi.\n';
    }

    if (!course) {
        isValid = false;
        message += '- Nama mata kuliah wajib diisi.\n';
    }

    if (!deadline) {
        isValid = false;
        message += '- Deadline wajib diisi.\n';
    }

    if (deadline) {
        const today = new Date();
        const selectedDate = new Date(deadline);

        today.setHours(0, 0, 0, 0);
        selectedDate.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            isValid = false;
            message += '- Tanggal deadline tidak boleh sebelum tanggal hari ini.\n';
        }
    }

    if (!isValid) {
        alert('Periksa kembali input Anda:\n\n' + message);
        return;
    }
```
sebelum menjelaskan lebih lanjut pada bagian course dan title, harus diketahui jika itu sebenarnya tidak begitu berguna.
tapi tetap akan saya jelaskan cara kerja kode saya yaitu dengan membuat variable message dan isValid, maka tiap message akan ditambahkan membentuk daftar bagian yang tidak valid dan isValid yang semulanya true menjadi false,
dengan begitu setelah semuanya di cek akan ada pembuktian apakah valid atau tidak, jika tidak valid maka akan muncul alert dan fungsi langsung return tanpa value sehingga tidak terjadi apa apa.
adapun yang berguna adalah bagian deadline pada bagian `showModal()` berikut
```javascript
    const today = new Date().toISOString().split('T')[0];
    taskDeadline.setAttribute('min', today);
```
dengan mengambil tanggal hari ini, lalu menset atribut dari taskDeadline minimal di hari ini, user tidak dapat mengisi dengan tanggal sebelum hari ini.

---

# [Tugas Praktikum 2](https://github.com/sinavarasina/pemrograman_web_itera_123140107/tree/main/varasinafarmadani_123140107_pertemuan2)
## Personal Dashboard — JavaScript Next-Gen (ES6+)

---

## 1) Deskripsi Singkat
Aplikasi **Personal Dashboard** sederhana untuk mengelola **Tugas** dan **Catatan** dengan UI ringan, tema **Catppuccin Mocha**, serta persistensi data memakai **localStorage**. Panel **Info** menampilkan waktu dari API publik menggunakan **async/await**. Seluruh kode ditulis memakai fitur **ES6+** (Next-Gen JavaScript).

### Fungsionalitas Inti
- **Tugas**: tambah, edit, hapus, tandai selesai, cari, urutkan, hapus semua yang selesai.
- **Catatan**: tambah, hapus.
- **Info**: waktu dari API publik (WorldTime) + statistik tugas.
- **Persistensi**: semua data disimpan di **localStorage** dan bertahan setelah reload.

---

## 2) Implementasi Fitur ES6+ yang Diminta
> Tiap butir menyebutkan **fitur ES6+** dan **lokasi implementasi** (file/fungsi).

- **let/const** — konsisten di semua modul (`src/*.js`).
- **≥ 3 Arrow Functions** — contoh:
  - `utils.js`: `$`, `$$`, `fmtTime`, `clamp`, `byId`, `replaceById`, `pick`.
  - `ui.js`: `bindDelegation`, renderer berbasis template literals (`renderTasks`, `renderNotes` menggunakan arrow untuk callback).
  - `main.js`: berbagai event handler (`addEventListener(..., (e) => {{...}})`).
- **Template Literals** — render daftar pada `src/ui.js` (elemen `<li>` disusun via back-ticks).
- **Destructuring + Spread/Rest** —
  - `main.js`: `let { tasks, notes } = loadAll()`; update imutabel `tasks = [t, ...tasks]` dan `{ ...t, done: ... }`.
  - `utils.js`: `pick(obj, ...keys)` (rest params).
- **Default Parameters** — `utils.js: fmtTime(ts = Date.now())`, `models.js: new Task/Note(...)` dengan nilai default.
- **Classes** — `models.js`: `class Task`, `class Note`; `storage.js`: `class Store`.
- **Modules (import/export)** — semua berkas di `src/` diekspor & diimpor modular.
- **Array HOF (map/filter/sort/find)** —
  - `ui.js`: `tasks.map(...)`.
  - `main.js`: `tasks.filter(...)`, `tasks.find(...)`, `sorted = [...tasks].sort(sorters[...])`.
- **Async/Await / Promise** — `api.js: fetchTime()` memakai `await fetch(...)` dan error handling.
- **localStorage** — `storage.js: Store.tasks/Store.notes` untuk load/save JSON.

---

## 3) Cara Menjalankan
> Sebelum menjalankan pastikan anda sudah menginstall node.js dan npm

1.  clone repo ini
    ```bash
    git clone https://github.com/sinavarasina/pemrograman_web_itera_123140107.git
    ```
2.  cd ke repo nya
    ```bash
    cd pemrograman_web_itera_123140107
    ```
3.  jalankan aplikasi dengan serve
    ```bash
    npx serve varasinafarmadani_123140107_pertemuan2
    ```
4. buka server local host yang di berikan  
serve umumnya akan menjalankan server bagi web yang dihosting pada port 3000 seperti ini  
![serve](https://raw.githubusercontent.com/sinavarasina/pemrograman_web_itera_123140107/refs/heads/main/screenshoot/tugas2/Screenshot_2025-10-27_19-23-16.png)  
buka dengan browser yang anda gunakan.  

---

## 4) Struktur Proyek
```
.
├── index.html
├── style.css
└── src
    ├── api.js        # async/await (fetch waktu)
    ├── main.js       # glue: state, event handlers, sort/filter, persist
    ├── models.js     # Classes: Task, Note
    ├── storage.js    # Store (localStorage)
    ├── ui.js         # render tasks/notes + event delegation
    └── utils.js      # helpers (arrow fn, default params, sorters, dll)
```

---

## 5) Screenshot 
### UI (landscape & portait)
![UI landscape](https://raw.githubusercontent.com/sinavarasina/pemrograman_web_itera_123140107/refs/heads/main/screenshoot/tugas2/Screenshot_2025-10-27_19-20-32.png)
### Fitur CRUD dasar pada Tugas dan Catatan
![Tambah Hapus Edit](https://raw.githubusercontent.com/sinavarasina/pemrograman_web_itera_123140107/refs/heads/main/screenshoot/tugas2/Screenshot_2025-10-27_19-26-30.png)
### API 
![Belum Fetch](https://raw.githubusercontent.com/sinavarasina/pemrograman_web_itera_123140107/refs/heads/main/screenshoot/tugas2/Screenshot_2025-10-27_19-21-16.png)
![SudahFetch](https://raw.githubusercontent.com/sinavarasina/pemrograman_web_itera_123140107/refs/heads/main/screenshoot/tugas2/Screenshot_2025-10-27_19-21-22.png)
### Error Handling
![API gagal fetch](https://raw.githubusercontent.com/sinavarasina/pemrograman_web_itera_123140107/refs/heads/main/screenshoot/tugas2/Screenshot_2025-10-27_19-24-54.png)
### Search
![Pencarian](https://raw.githubusercontent.com/sinavarasina/pemrograman_web_itera_123140107/refs/heads/main/screenshoot/tugas2/Screenshot_2025-10-27_19-29-28.png)
### Prioritas 
![Prioritas](https://raw.githubusercontent.com/sinavarasina/pemrograman_web_itera_123140107/refs/heads/main/screenshoot/tugas2/Screenshot_2025-10-27_19-21-02.png)
### Sort 
![Sort](https://raw.githubusercontent.com/sinavarasina/pemrograman_web_itera_123140107/refs/heads/main/screenshoot/tugas2/Screenshot_2025-10-27_19-21-44.png)

---

## 6) Checklist Kesesuaian Tugas
- [x] **Fungsionalitas & interaktivitas** (CRUD, search, sort, clear done).
- [x] **ES6+**: let/const, ≥3 arrow fn, template literals, destructuring, spread/rest, default params, classes, modules, HOF array, async/await.
- [x] **localStorage** untuk penyimpanan data pengguna.
- [x] **UI/UX** rapi (tema Catppuccin Mocha, micro-interaction hover).
- [x] **Dokumentasi** (README ini) ringkas, jelas, dan menyertakan screenshot saat pengumpulan.

---

## 7) Catatan Teknis
- **Copy-on-write** dengan **spread** saat update array → menghindari mutasi tak disengaja.
- **Event Delegation** pada list dinamis mengurangi jumlah listener.
- **Aksesibilitas**: tombol bertipe eksplisit, fokus terlihat, warna dengan kontras memadai.
- **Tema**: palet **Catppuccin Mocha** via CSS custom properties pada `:root`.

---

# **Tugas Praktikum 3 — React Dasar**
## **Aplikasi Manajemen Buku Pribadi**

---

### **1) Deskripsi Singkat**

Aplikasi ini dibuat untuk memenuhi tugas **Praktikum Pemrograman Web — React Dasar**.
Fungsinya untuk mengelola daftar buku pribadi dengan fitur **menambah**, **mengedit**, **menghapus**, **mencari**, dan **memfilter** berdasarkan status.
Semua data disimpan di **localStorage**, dan state global dikelola menggunakan **React Context API**.

Framework utama:

* **React 19 (Vite)**
* **Vitest + React Testing Library** untuk pengujian unit
* **CSS modular** per-komponen untuk gaya visual

---

### **2) Daftar Fitur**

| No | Fitur                               | Status | Implementasi                       |
| -- | ----------------------------------- | :----: | ---------------------------------- |
| 1  | Menambah buku baru                  |    ✅   | `BookForm.jsx`                     |
| 2  | Mengedit buku (inline edit)         |    ✅   | `BookList.jsx`                     |
| 3  | Menghapus buku                      |    ✅   | `BookList.jsx`                     |
| 4  | Filter berdasarkan status           |    ✅   | `BookFilter.jsx`                   |
| 5  | Pencarian berdasarkan judul/penulis |    ✅   | Input search di `Home.jsx`         |
| 6  | Gunakan 2 custom hooks              |    ✅   | `useBookStats`, `useFilteredBooks` |
| 7  | Gunakan Context API                 |    ✅   | `BookContext.jsx`                  |
| 8  | Gunakan localStorage                |    ✅   | `useLocalStorage.jsx`              |
| 9  | Gunakan React Router                |    ✅   | `App.jsx` (Home & Stats)           |
| 10 | Minimal 5 Unit Test                 |    ✅   | 6 file di `/tests`                 |
| 11 | Penanganan input kosong             |    ✅   | Validasi `BookForm` & `BookList`   |

---

### **3) Screenshot**
ntar

---

### **4) Cara Menjalankan**

```bash
# Clone repository
git clone https://github.com/sinavarasina/pemrograman_web_itera_123140107.git

# Masuk ke direktori tugas
cd pemrograman_web_itera_123140107/varasinafarmadani_123140107_pertemuan3

# Install dependensi
npm install

# Jalankan dalam mode development
npm run dev

# Jalankan unit test
npm run test
```

---

### **5) Struktur Direktori**

```
src/
├── App.jsx
├── App.css
├── assets/
│   └── react.svg
├── components/
│   ├── BookForm/
│   ├── BookList/
│   └── BookFilter/
├── context/
│   └── BookContext.jsx
├── hooks/
│   ├── useBookStats.jsx
│   ├── useFilteredBooks.jsx
│   └── useLocalStorage.jsx
├── pages/
│   ├── Home.jsx
│   ├── Stats.jsx
│   ├── Home.css
│   └── Stats.css
└── tests/
    ├── App.test.jsx
    ├── BookForm.test.jsx
    ├── BookList.test.jsx
    ├── BookFilter.test.jsx
    ├── Stats.test.jsx
    ├── Search.test.jsx
    └── setup.js
```

---

### **6) Laporan Testing**

```
npm run test

> varasinafarmadani_123140107_pertemuan3@0.0.0 test
> vitest


 DEV  v4.0.7 /home/sina/Documents/Codingan/pemweb/pemrograman_web_itera_123140107/varasinafarmadani_123140107_pertemuan3

 ✓ src/tests/BookList.test.jsx (1 test) 40ms
 ✓ src/tests/BookFilter.test.jsx (1 test) 82ms
 ✓ src/tests/Stats.test.jsx (1 test) 72ms
 ✓ src/tests/BookForm.test.jsx (1 test) 128ms
 ✓ src/tests/App.test.jsx (1 test) 94ms
 ✓ src/tests/Search.test.jsx (1 test) 137ms

 Test Files  6 passed (6)
      Tests  6 passed (6)
   Start at  20:39:42
   Duration  2.35s (transform 784ms, setup 897ms, collect 2.69s, tests 552ms, environment 7.12s, prepare 180ms)
```

---

### **7) Analisis & Hook yang Digunakan**

* `useLocalStorage`
  → Mengelola penyimpanan data buku secara sinkron dengan localStorage.
* `useBookStats`
  → Menghitung statistik total buku, milik, baca, dan beli.
* `useFilteredBooks`
  → Memfilter daftar buku berdasarkan status dan query pencarian.

---

