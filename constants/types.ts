// ============================================================
// BAQIR - Type Definitions
// Tipe data yang sesuai dengan respons API backend
// ============================================================

// --- AUTH ---
export interface LoginResponse {
  message: string;
  token: string;
  user: UserProfile;
}

export interface RegisterResponse {
  message: string;
  user: UserProfile;
}

// --- USER ---
export interface UserProfile {
  id: number;
  nama: string;
  email: string;
}

// --- BUAH (dari Fruityvice) ---
export interface Buah {
  id: number;
  nama: string;
  family: string;
  genus: string;
  order: string;
  karbohidrat: number;
  protein: number;
  lemak: number;
  kalori: number;
  gula: number;
  deskripsi: string;
  rating: number;
  warna: string;
}

// --- RESEP JUS ---
export interface ResepJus {
  id: number;
  nama: string;
  warna: string;
  waktuPersiapan: string;
  kesulitan: string;
  bahan: string[];
  langkah: string[];
  deskripsi: string;
}

// --- TIPS PENYIMPANAN ---
export interface TipsPenyimpanan {
  id: number;
  judul: string;
  deskripsi: string;
  ikon: string;
}

// --- RIWAYAT SCAN ---
export interface RiwayatScan {
  id: number;
  userId: number;
  namaBuah: string;
  warna: string;
  tanggal: string;
  kesegaran: number;
  kategori: string;
  statusKelayakan: string;
  saranPenyimpanan: string;
  resepSaran: ResepSaranItem[];
}

// --- HASIL ANALISIS (respons dari AI Qwen) ---
export interface ResepSaranItem {
  nama: string;
  resep: string;
}

export interface HasilAnalisis {
  id: number;
  namaBuah: string;
  warna: string;
  tanggal: string;
  kesegaran: number;
  kategori: string;
  statusKelayakan: string;
  saranPenyimpanan: string;
  resepSaran: ResepSaranItem[];
}

// --- API Response Wrapper ---
export interface ApiResponse<T> {
  data: T;
  message?: string;
}
