import { apiGetSecure, apiPostFormData } from './api';
import type { HasilAnalisis, RiwayatScan, ApiResponse } from '../constants/types';

// Kirim gambar buah ke AI untuk dianalisis kualitas/kesegarannya
export async function analyzeScan(imageUri: string): Promise<HasilAnalisis> {
  const formData = new FormData();

  // Buat objek file dari URI gambar
  const filename = imageUri.split('/').pop() || 'photo.jpg';
  const match = /\.(\w+)$/.exec(filename);
  const mimeType = match ? `image/${match[1]}` : 'image/jpeg';

  formData.append('image', {
    uri: imageUri,
    name: filename,
    type: mimeType,
  } as any);

  const response = await apiPostFormData<{ message: string; data: HasilAnalisis }>('/scan/analyze', formData);
  return response.data;
}

// Ambil riwayat pemindaian user (terbaru dulu)
export async function getHistory(): Promise<RiwayatScan[]> {
  const response = await apiGetSecure<ApiResponse<RiwayatScan[]>>('/history');
  return response.data;
}
