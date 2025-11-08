def make_new_mahasiswa():
    mhs = {
        "nama": None,
        "NIM": None,
        "nilai_uts": None,
        "nilai_uas": None,
        "nilai_tugas": None,
    }

    print("Isi Data Mahasiswa")
    mhs["nama"] = input("\tNama: ")
    mhs["NIM"] = input("\tNIM: ")

    def input_nilai(label):
        while True:
            try:
                nilai = float(input(f"\tNilai {label}: "))
                if 0 <= nilai <= 100:
                    return nilai
                print("Nilai harus antara 0–100!")
            except ValueError:
                print("Input tidak valid, masukkan angka.")

    mhs["nilai_uts"] = input_nilai("UTS")
    mhs["nilai_uas"] = input_nilai("UAS")
    mhs["nilai_tugas"] = input_nilai("Tugas")

    return mhs
