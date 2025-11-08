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
    mahasiswa_list = []

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
