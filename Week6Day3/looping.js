// Soal 1 - Jadwal Piket Mingguan
const hariPiket = [
  "Sabtu",
  "Ahad",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
];

console.log("=== Soal 1: Jadwal Piket Mingguan ===");
for (let index = 0; index < hariPiket.length; index++) {
  console.log(`Piket hari ke-${index + 1}: ${hariPiket[index]}`);
}

// Soal 2 - Rekap Tabungan Santri
const tabungan = [5000, 3000, 0, 7000, 2000, 10000];
let totalTabungan = 0;
const hariTidakMenabung = [];

for (let index = 0; index < tabungan.length; index++) {
  totalTabungan += tabungan[index];

  if (tabungan[index] === 0) {
    hariTidakMenabung.push(index + 1);
  }
}

const rataRataTabungan = totalTabungan / tabungan.length;
console.log("\n=== Soal 2: Rekap Tabungan Santri ===");
console.log(
  `Total tabungan selama ${tabungan.length} hari: Rp${totalTabungan}`,
);
console.log(`Rata-rata tabungan per hari: Rp${rataRataTabungan.toFixed(2)}`);
console.log(`Hari tidak menabung: ${hariTidakMenabung.join(", ")}`);

// Soal 3 - Antrean Setoran Hafalan
const kuotaSetoran = 8;
let nomorSantri = 1;

console.log("\n=== Soal 3: Antrean Setoran Hafalan ===");
while (nomorSantri <= kuotaSetoran) {
  console.log(`Santri ke-${nomorSantri} sedang setor hafalan...`);
  nomorSantri++;
}
console.log("Kuota setoran hari ini telah penuh.");

// Soal 4 - Konfirmasi Ustadz Piket
// Di Node.js, input disimulasikan dengan beberapa respons.
const simulasiInputUstadz = ["", "", "Ustadz Abdullah"];
let indeksInput = 0;
let namaUstadz;

do {
  namaUstadz = simulasiInputUstadz[indeksInput] ?? "";
  indeksInput++;
  console.log(`Input nama ustadz: "${namaUstadz}"`);
} while (namaUstadz.trim() === "");

console.log(`Nama ustadz penanggung jawab piket: ${namaUstadz}`);

// Soal 5 - Filter dan Deteksi Nilai Ujian Tahfidz
const nilaiTahfidz = [88, -1, 95, 100, 70, -5, 60, 100, 45, 99];

console.log("\n=== Soal 5: Nilai Ujian Tahfidz ===");
for (let index = 0; index < nilaiTahfidz.length; index++) {
  const nilai = nilaiTahfidz[index];
  const nomorData = index + 1;

  if (nilai < 0) {
    console.log(`Data tidak valid dilewati: ${nilai}`);
    continue;
  }

  if (nilai === 100) {
    console.log(
      `Nilai sempurna ditemukan pada data ke-${nomorData}. Pemeriksaan dihentikan.`,
    );
    break;
  }

  console.log(`Nilai ke-${nomorData}: valid`);
}

// Soal Bonus - Rekap Akhir Piket Mingguan
const kehadiranPiket = [
  "hadir",
  "izin",
  "hadir",
  "sakit",
  "hadir",
  "alpa",
  "hadir",
];
let jumlahHadir = 0;
let jumlahTidakHadir = 0;

console.log("\n=== Soal Bonus: Rekap Akhir Piket Mingguan ===");
for (let index = 0; index < kehadiranPiket.length; index++) {
  const status = kehadiranPiket[index].toLowerCase();

  if (status !== "hadir") {
    jumlahTidakHadir++;
    continue;
  }

  jumlahHadir++;
}

const persentaseKehadiran = (jumlahHadir / kehadiranPiket.length) * 100;
console.log(`Jumlah hari hadir: ${jumlahHadir}`);
console.log(`Jumlah hari tidak hadir: ${jumlahTidakHadir}`);
console.log(
  `Persentase kehadiran selama seminggu: ${persentaseKehadiran.toFixed(2)}%`,
);
