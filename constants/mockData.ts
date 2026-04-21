// ============================================================
// BAQIR - Mock Data (Dummy Data)
// Semua data dummy untuk mengisi tampilan UI
// ============================================================

// --- TYPES ---
export interface Buah {
  id: string;
  nama: string;
  warna: string;
  manfaat: string;
  deskripsi: string;
}

export interface ResepJus {
  id: string;
  nama: string;
  warna: string;
  waktuPersiapan: string;
  kesulitan: string;
  bahan: string[];
  langkah: string[];
  deskripsi: string;
}

export interface TipsPenyimpanan {
  id: string;
  judul: string;
  deskripsi: string;
  ikon: string;
}

export interface RiwayatScan {
  id: string;
  nama: string;
  warna: string;
  tanggal: string;
  kesegaran: number;
  kategori: 'buah' | 'sayuran';
}

export interface NilaiGizi {
  nama: string;
  jumlah: string;
  ikon: string;
}

export interface HasilAnalisisData {
  id: string;
  nama: string;
  warna: string;
  status: string;
  kesegaran: number;
  nilaiGizi: NilaiGizi[];
  rekomendasiPenyimpanan: string;
  resepTerkait: ResepJus[];
}

export interface VitaminInfo {
  nama: string;
  jumlah: string;
  ikon: string;
}

export interface AntioksidanInfo {
  nama: string;
  deskripsi: string;
}

export interface DampakKesehatanInfo {
  judul: string;
  deskripsi: string;
  ikon: string;
}

export interface DetailBuahData {
  id: string;
  nama: string;
  namaLatin: string;
  warna: string;
  rating: number;
  deskripsi: string;
  vitamin: VitaminInfo[];
  antioksidan: AntioksidanInfo[];
  dampakKesehatan: DampakKesehatanInfo[];
}

export interface UserProfileData {
  nama: string;
  email: string;
}

// --- DATA ---

export const manfaatBuah: Buah[] = [
  {
    id: '1',
    nama: 'Apel',
    warna: '#FF6B6B',
    manfaat: 'Kaya serat & antioksidan',
    deskripsi: 'Apel mengandung serat larut yang membantu menurunkan kolesterol dan menjaga kesehatan pencernaan.',
  },
  {
    id: '2',
    nama: 'Jeruk',
    warna: '#FF9F43',
    manfaat: 'Sumber Vitamin C tinggi',
    deskripsi: 'Jeruk kaya akan vitamin C yang meningkatkan daya tahan tubuh dan melindungi sel dari kerusakan.',
  },
  {
    id: '3',
    nama: 'Mangga',
    warna: '#FECA57',
    manfaat: 'Meningkatkan imunitas',
    deskripsi: 'Mangga kaya akan vitamin A dan C, serta mengandung enzim pencernaan yang membantu metabolisme.',
  },
  {
    id: '4',
    nama: 'Pisang',
    warna: '#FFD93D',
    manfaat: 'Sumber energi alami',
    deskripsi: 'Pisang kaya potasium dan karbohidrat kompleks, menjadi sumber energi yang ideal sebelum olahraga.',
  },
  {
    id: '5',
    nama: 'Anggur',
    warna: '#A855F7',
    manfaat: 'Melindungi jantung',
    deskripsi: 'Anggur mengandung resveratrol yang melindungi kesehatan jantung dan pembuluh darah.',
  },
  {
    id: '6',
    nama: 'Semangka',
    warna: '#EF4444',
    manfaat: 'Hidrasi & Vitamin A',
    deskripsi: 'Semangka mengandung 92% air dan kaya akan likopen, baik untuk hidrasi dan kesehatan kulit.',
  },
];

export const resepJus: ResepJus[] = [
  {
    id: '1',
    nama: 'Jus Apel Segar',
    warna: '#FF6B6B',
    waktuPersiapan: '5 menit',
    kesulitan: 'Mudah',
    deskripsi: 'Jus apel segar yang menyehatkan dengan tambahan sedikit madu dan lemon.',
    bahan: ['2 buah apel merah', '1 sdm madu', '1/2 buah lemon', '100 ml air dingin', 'Es batu secukupnya'],
    langkah: [
      'Cuci bersih apel dan potong menjadi beberapa bagian.',
      'Masukkan potongan apel ke dalam blender.',
      'Tambahkan madu, perasan lemon, dan air dingin.',
      'Blender hingga halus selama 1-2 menit.',
      'Saring jus ke dalam gelas dan tambahkan es batu.',
      'Sajikan segera untuk mendapatkan nutrisi maksimal.',
    ],
  },
  {
    id: '2',
    nama: 'Jus Mangga Tropis',
    warna: '#FECA57',
    waktuPersiapan: '7 menit',
    kesulitan: 'Mudah',
    deskripsi: 'Jus mangga tropis yang manis dan creamy dengan yogurt.',
    bahan: ['1 buah mangga matang', '100 ml yogurt plain', '1 sdm madu', '50 ml susu', 'Es batu secukupnya'],
    langkah: [
      'Kupas mangga dan potong dagingnya.',
      'Masukkan potongan mangga ke dalam blender.',
      'Tambahkan yogurt, madu, dan susu.',
      'Blender hingga halus dan creamy.',
      'Tuang ke dalam gelas dan tambahkan es batu.',
      'Hias dengan potongan mangga di pinggir gelas.',
    ],
  },
  {
    id: '3',
    nama: 'Smoothie Pisang',
    warna: '#FFD93D',
    waktuPersiapan: '5 menit',
    kesulitan: 'Mudah',
    deskripsi: 'Smoothie pisang yang creamy dan mengenyangkan, cocok untuk sarapan.',
    bahan: ['2 buah pisang matang', '200 ml susu almond', '1 sdm selai kacang', '1 sdm madu', '1/2 sdt kayu manis'],
    langkah: [
      'Potong pisang menjadi beberapa bagian.',
      'Masukkan pisang, susu almond, dan selai kacang ke blender.',
      'Tambahkan madu dan kayu manis.',
      'Blender hingga halus dan creamy.',
      'Tuang ke dalam gelas dan taburi kayu manis.',
    ],
  },
  {
    id: '4',
    nama: 'Jus Jeruk Segar',
    warna: '#FF9F43',
    waktuPersiapan: '10 menit',
    kesulitan: 'Sedang',
    deskripsi: 'Jus jeruk peras segar dengan kombinasi wortel untuk nutrisi ekstra.',
    bahan: ['3 buah jeruk manis', '1 buah wortel', '1 sdm madu', 'Es batu secukupnya', '50 ml air'],
    langkah: [
      'Peras jeruk dan saring ampasnya.',
      'Kupas dan potong wortel menjadi potongan kecil.',
      'Blender wortel dengan sedikit air hingga halus.',
      'Campurkan jus jeruk dengan jus wortel.',
      'Tambahkan madu dan aduk rata.',
      'Sajikan dengan es batu.',
    ],
  },
  {
    id: '5',
    nama: 'Jus Anggur Delima',
    warna: '#A855F7',
    waktuPersiapan: '8 menit',
    kesulitan: 'Sedang',
    deskripsi: 'Kombinasi jus anggur dan delima yang kaya antioksidan.',
    bahan: ['200 gr anggur merah', '1 buah delima', '1 sdm madu', '100 ml air dingin', 'Daun mint secukupnya'],
    langkah: [
      'Cuci anggur dan pisahkan dari tangkainya.',
      'Keluarkan biji delima dari buahnya.',
      'Masukkan anggur dan biji delima ke dalam blender.',
      'Tambahkan air dingin dan madu.',
      'Blender hingga halus, saring jika perlu.',
      'Hias dengan daun mint dan sajikan dingin.',
    ],
  },
];

export const tipsPenyimpanan: TipsPenyimpanan[] = [
  {
    id: '1',
    judul: 'Simpan di Suhu Tepat',
    deskripsi: 'Pisang, mangga, dan alpukat lebih baik disimpan di suhu ruang hingga matang, baru masukkan ke kulkas.',
    ikon: 'thermometer',
  },
  {
    id: '2',
    judul: 'Pisahkan Buah Etilen',
    deskripsi: 'Apel dan pisang menghasilkan gas etilen. Pisahkan dari buah lain agar tidak cepat matang berlebihan.',
    ikon: 'leaf',
  },
  {
    id: '3',
    judul: 'Gunakan Wadah Kedap',
    deskripsi: 'Buah potong harus disimpan dalam wadah kedap udara di kulkas untuk menjaga kesegaran hingga 3 hari.',
    ikon: 'package',
  },
  {
    id: '4',
    judul: 'Jangan Cuci Sebelum Simpan',
    deskripsi: 'Mencuci buah sebelum disimpan menambah kelembapan yang mempercepat pembusukan. Cuci saat akan dimakan.',
    ikon: 'droplets',
  },
  {
    id: '5',
    judul: 'Bekukan untuk Jangka Panjang',
    deskripsi: 'Buah yang sudah matang bisa dibekukan. Potong dan sebarkan di nampan sebelum masukkan ke plastik beku.',
    ikon: 'snowflake',
  },
];

export const riwayatPemindaian: RiwayatScan[] = [
  { id: '1', nama: 'Apel Fuji', warna: '#FF6B6B', tanggal: '19 Apr 2026', kesegaran: 95, kategori: 'buah' },
  { id: '2', nama: 'Jeruk Mandarin', warna: '#FF9F43', tanggal: '18 Apr 2026', kesegaran: 88, kategori: 'buah' },
  { id: '3', nama: 'Bayam Segar', warna: '#22C55E', tanggal: '18 Apr 2026', kesegaran: 72, kategori: 'sayuran' },
  { id: '4', nama: 'Pisang Cavendish', warna: '#FFD93D', tanggal: '17 Apr 2026', kesegaran: 60, kategori: 'buah' },
  { id: '5', nama: 'Tomat Merah', warna: '#EF4444', tanggal: '17 Apr 2026', kesegaran: 20, kategori: 'sayuran' },
  { id: '6', nama: 'Mangga Harum Manis', warna: '#FECA57', tanggal: '16 Apr 2026', kesegaran: 90, kategori: 'buah' },
  { id: '7', nama: 'Wortel', warna: '#F97316', tanggal: '15 Apr 2026', kesegaran: 85, kategori: 'sayuran' },
  { id: '8', nama: 'Anggur Merah', warna: '#A855F7', tanggal: '15 Apr 2026', kesegaran: 45, kategori: 'buah' },
];

export const hasilAnalisis: HasilAnalisisData = {
  id: '1',
  nama: 'Apel Fuji',
  warna: '#FF6B6B',
  status: 'Cocok dikonsumsi',
  kesegaran: 95,
  nilaiGizi: [
    { nama: 'Serat', jumlah: '4.4g', ikon: 'wheat' },
    { nama: 'Kalori', jumlah: '95 kkal', ikon: 'flame' },
    { nama: 'Vitamin C', jumlah: '8.4mg', ikon: 'pill' },
  ],
  rekomendasiPenyimpanan: 'Simpan di kulkas pada suhu 1-4°C. Apel Fuji dapat bertahan hingga 4-6 minggu jika disimpan dengan benar. Hindari menyimpan bersama sayuran hijau karena gas etilen dari apel dapat mempercepat pembusukan.',
  resepTerkait: [],
};

export const detailBuah: DetailBuahData = {
  id: '1',
  nama: 'Apel Fuji',
  namaLatin: 'Malus domestica',
  warna: '#FF6B6B',
  rating: 4.5,
  deskripsi: 'Apel Fuji adalah varietas apel yang berasal dari Jepang, dikenal dengan rasa manis dan tekstur renyah. Buah ini merupakan hasil persilangan antara varietas Red Delicious dan Ralls Janet pada tahun 1962. Apel Fuji menjadi salah satu varietas apel paling populer di dunia karena rasanya yang konsisten manis dengan sedikit keasaman yang menyegarkan.\n\nApel Fuji memiliki kulit berwarna merah cerah dengan sedikit corak kuning-hijau. Dagingnya berwarna putih krem, padat, dan sangat berair. Kandungan gula alaminya yang tinggi menjadikannya pilihan sempurna untuk dimakan langsung maupun diolah menjadi berbagai hidangan.',
  vitamin: [
    { nama: 'Vitamin C', jumlah: '8.4 mg', ikon: 'citrus' },
    { nama: 'Vitamin A', jumlah: '3 mcg', ikon: 'eye' },
    { nama: 'Vitamin K', jumlah: '2.2 mcg', ikon: 'heart' },
    { nama: 'Vitamin B6', jumlah: '0.04 mg', ikon: 'zap' },
  ],
  antioksidan: [
    { nama: 'Quercetin', deskripsi: 'Melawan peradangan dan mendukung kesehatan jantung. Ditemukan terutama di kulit apel.' },
    { nama: 'Catechin', deskripsi: 'Meningkatkan fungsi otak dan metabolisme tubuh secara keseluruhan.' },
    { nama: 'Asam Klorogenik', deskripsi: 'Membantu menurunkan kadar gula darah dan mendukung penurunan berat badan.' },
  ],
  dampakKesehatan: [
    { judul: 'Kesehatan Jantung', deskripsi: 'Serat larut dalam apel membantu menurunkan kadar kolesterol LDL dalam darah.', ikon: 'heart' },
    { judul: 'Pencernaan', deskripsi: 'Kandungan pektin dalam apel berfungsi sebagai prebiotik untuk bakteri usus baik.', ikon: 'leaf' },
    { judul: 'Kontrol Gula Darah', deskripsi: 'Polifenol dalam apel membantu memperlambat penyerapan gula dalam tubuh.', ikon: 'bar-chart-3' },
    { judul: 'Kesehatan Otak', deskripsi: 'Antioksidan quercetin melindungi sel-sel otak dari kerusakan oksidatif.', ikon: 'brain' },
  ],
};

// Link resep terkait ke hasil analisis
hasilAnalisis.resepTerkait = [resepJus[0], resepJus[3]];

export const userProfile: UserProfileData = {
  nama: 'Ahmad Fauzi',
  email: 'ahmad.fauzi@email.com',
};
