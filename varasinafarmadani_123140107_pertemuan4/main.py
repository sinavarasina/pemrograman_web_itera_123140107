from mahasiswa import make_new_mahasiswa
from utils import print_tabel
from nilai import (
    calculate_finscore,
    get_highest,
    get_lowest,
    filter_by_grade,
    get_mean,
)


def main():
    # Sorry bang saya salah paham sama tugas nya tadi, pada bagian
    # Buat list berisi minimal 5 dictionary data mahasiswa
    # Setiap mahasiswa memiliki: nama, NIM, nilai_uts, nilai_uas, nilai_tugas
    # Saya kira 5 dictionary itu maksudnya nama, NIM, nilai_uts, nilai_uas, dan
    # nilai_tugas,
    # Saya barusadar ketika teman memberitahu kalau min 5 yang di maksud itu
    # adalah minimal 5 data sudah di buat.

    mahasiswa_list = [
        {"nama": "Rintarou Okabe", "NIM": "23SG14001",
            "nilai_uts": 78, "nilai_uas": 82, "nilai_tugas": 70},
        {"nama": "Mayuri Shiina", "NIM": "23SG14002",
            "nilai_uts": 60, "nilai_uas": 65, "nilai_tugas": 70},
        {"nama": "Itaru Hashida", "NIM": "23SG14003",
            "nilai_uts": 85, "nilai_uas": 80, "nilai_tugas": 88},
        {"nama": "Kurisu Makise", "NIM": "23SG14004",
            "nilai_uts": 95, "nilai_uas": 98, "nilai_tugas": 93},
        {"nama": "Moeka Kiryu", "NIM": "23SG14005",
            "nilai_uts": 83, "nilai_uas": 77, "nilai_tugas": 79},
        {"nama": "Luka Urushibara", "NIM": "23SG14006",
            "nilai_uts": 72, "nilai_uas": 75, "nilai_tugas": 80},
        {"nama": "Faris NyanNyan", "NIM": "23SG14007",
            "nilai_uts": 70, "nilai_uas": 68, "nilai_tugas": 85},
        {"nama": "Suzuha Amane", "NIM": "23SG14008",
            "nilai_uts": 88, "nilai_uas": 84, "nilai_tugas": 90},
        {"nama": "Maho Hiyajo", "NIM": "23SG14009",
            "nilai_uts": 91, "nilai_uas": 94, "nilai_tugas": 89},
        {"nama": "Kagari Shiina", "NIM": "23SG14010",
            "nilai_uts": 82, "nilai_uas": 85, "nilai_tugas": 80},
        {"nama": "Yuki Amane", "NIM": "23SG14011",
            "nilai_uts": 77, "nilai_uas": 81, "nilai_tugas": 76},
    ]

    while True:
        print("\n=== Menu ===")
        print("1. Tampilkan semua data mahasiswa")
        print("2. Tambah data mahasiswa baru")
        print("3. Tampilkan mahasiswa dengan nilai tertinggi")
        print("4. Tampilkan mahasiswa dengan nilai terendah")
        print("5. Filter berdasarkan grade")
        print("6. Hitung rata-rata nilai kelas")
        print("0. Keluar")

        pilihan = input("Pilih menu: ")

        if pilihan == "1":
            print_tabel(mahasiswa_list)

        elif pilihan == "2":
            mahasiswa_list.append(make_new_mahasiswa())

        elif pilihan == "3":
            tertinggi = get_highest(mahasiswa_list)
            if tertinggi:
                print(
                    f"\nMahasiswa Nilai Tertinggi: "
                    f"{tertinggi['nama']
                       } ({calculate_finscore(tertinggi):.2f})"
                )
            else:
                print("Data masih kosong.")

        elif pilihan == "4":
            terendah = get_lowest(mahasiswa_list)
            if terendah:
                print(
                    f"\nMahasiswa Nilai Terendah: "
                    f"{terendah['nama']} ({calculate_finscore(terendah):.2f})"
                )
            else:
                print("Data masih kosong.")

        elif pilihan == "5":
            g = input("Masukkan grade (A/B/C/D/E): ").upper()
            hasil = filter_by_grade(mahasiswa_list, g)
            if hasil:
                print_tabel(hasil)
            else:
                print(f"Tidak ada mahasiswa dengan grade {g}.")

        elif pilihan == "6":
            mean = get_mean(mahasiswa_list)
            if isinstance(mean, dict):
                print("\n=== Rata-rata Nilai Kelas ===")
                print(f"UTS   : {mean['uts']:.2f}")
                print(f"UAS   : {mean['uas']:.2f}")
                print(f"Tugas : {mean['tugas']:.2f}")
                print(f"Akhir : {mean['akhir']:.2f}")

        elif pilihan == "0":
            print("Keluar dari program...")
            break

        else:
            print("Pilihan tidak valid.")


if __name__ == "__main__":
    main()
