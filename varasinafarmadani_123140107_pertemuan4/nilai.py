def calculate_finscore(mhs):
    return (mhs["nilai_uts"] * 0.3) + (mhs["nilai_uas"] * 0.4) + (mhs["nilai_tugas"] * 0.3)


def get_grade(nilai):
    if nilai >= 80:
        return "A"
    elif nilai >= 70:
        return "B"
    elif nilai >= 60:
        return "C"
    elif nilai >= 50:
        return "D"
    else:
        return "E"


def get_mean(data):
    if not data:
        return {"uts": 0, "uas": 0, "tugas": 0, "akhir": 0}

    total_uts = sum(m["nilai_uts"] for m in data)
    total_uas = sum(m["nilai_uas"] for m in data)
    total_tugas = sum(m["nilai_tugas"] for m in data)
    total_akhir = sum(calculate_finscore(m) for m in data)

    n = len(data)
    return {
        "uts": total_uts / n,
        "uas": total_uas / n,
        "tugas": total_tugas / n,
        "akhir": total_akhir / n,
    }


def get_highest(data):
    if not data:
        return None
    return max(data, key=calculate_finscore)


def get_lowest(data):
    if not data:
        return None
    return min(data, key=calculate_finscore)


def filter_by_grade(data, grade):
    return [m for m in data if get_grade(calculate_finscore(m)) == grade]
