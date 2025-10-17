# [Tugas Praktikum 1](https://github.com/sinavarasina/pemrograman_web_itera_123140107/tree/main/varasinafarmadani_123140107_pertemuan1)
## Aplikasi Manajemen Tugas Mahasiswa (berbasis web)
Aplikasi ini bernama IAMT,
Aplikasi yang dibuat untuk membantu mahasiswa mengelola aktivitas akademik mereka. 
Aplikasi ini interaktif, fungsional, dan dapat menyimpan data secara lokal.
Aplikasi dibuat dengan HTML yang Semantik, dan JS ES6+.
Menggunakan Color Palete Catppuccin Mocha, dengan popup/modal untuk tambah & edit tugas.
Shortcut key seperti Search dengan '/' dan 'ESC' untuk keluar dari search.
adapun fitur aplikasi diciptakan untuk memenuhi Persyaratan & Fitur Wajib Aplikasi dari tugas sebagai berikut
### Daftar fitur yang telah diimplementasikan
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

## ScreenShot
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




## Cara menjalankan
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

## Penjelasan teknis tentang penggunaan localStorage dan validasi form
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
sebelum menjelaskan lebih lanjut pada bagian course dan title itu sebenarnya tidak begitu berguna.
cara kerja kode saya begini, dengan membuat variable message dan isValid, maka tiap message akan ditambahkan membentuk daftar bagian yang tidak valid dan isValid yang semulanya true menjadi false,
dengan begitu setelah semuanya di cek akan ada pembuktian apakah valid atau tidak, jika tidak valid maka akan muncul alert dan fungsi langsung return tanpa value sehingga tidak terjadi apa apa.
adapun yang berguna adalah bagian deadline pada bagian `showModal()` berikut
```javascript
    const today = new Date().toISOString().split('T')[0];
    taskDeadline.setAttribute('min', today);
```
dengan mengambil tanggal hari ini, lalu menset atribut dari taskDeadline minimal di hari ini, user tidak dapat mengisi dengan tanggal sebelum hari ini.

# Tugas Selanjutnya (comming soon)



