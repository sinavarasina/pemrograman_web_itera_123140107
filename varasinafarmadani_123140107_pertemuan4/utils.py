from nilai import calculate_finscore, get_grade


def print_tabel(data):
    print("-" * 90)
    print(f"{'Nama':<25} {'NIM':<10} {'UTS':>6} {
          'UAS':>6} {'Tugas':>8} {'Akhir':>8} {'Grade':>8}")
    print("-" * 90)

    for m in data:
        nilai_akhir = calculate_finscore(m)
        grade = get_grade(nilai_akhir)
        print(f"{m['nama']:<25} {m['NIM']:<10} {m['nilai_uts']:>6.2f} {m['nilai_uas']:>6.2f} "
              f"{m['nilai_tugas']:>8.2f} {nilai_akhir:>8.2f} {grade:>8}")

    print("-" * 90)
    print(f"Total data: {len(data)}")
