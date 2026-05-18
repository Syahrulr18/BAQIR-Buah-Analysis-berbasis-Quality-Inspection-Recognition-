import { apiGet } from './api';
import type { Buah, ResepJus, TipsPenyimpanan, ApiResponse } from '../constants/types';

// Ambil semua daftar buah dari database lokal (hasil sync Fruityvice)
export async function getAllBuah(): Promise<Buah[]> {
  const response = await apiGet<ApiResponse<Buah[]>>('/buah');
  return response.data;
}

// Ambil detail satu buah berdasarkan ID
export async function getBuahById(id: number): Promise<Buah> {
  const response = await apiGet<ApiResponse<Buah>>(`/buah/${id}`);
  return response.data;
}

// Ambil semua resep jus
export async function getAllResep(): Promise<ResepJus[]> {
  const response = await apiGet<ApiResponse<ResepJus[]>>('/resep');
  return response.data;
}

// Ambil semua tips penyimpanan
export async function getAllTips(): Promise<TipsPenyimpanan[]> {
  const response = await apiGet<ApiResponse<TipsPenyimpanan[]>>('/tips');
  return response.data;
}
