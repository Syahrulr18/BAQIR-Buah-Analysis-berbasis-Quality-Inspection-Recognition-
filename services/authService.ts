import { apiPost, apiGetSecure, setToken, removeToken } from './api';
import type { LoginResponse, RegisterResponse, UserProfile } from '../constants/types';

// Login — kirim email & password, simpan JWT token
export async function login(email: string, password: string): Promise<LoginResponse> {
  const response = await apiPost<LoginResponse>('/auth/login', { email, password });
  if (response.token) {
    await setToken(response.token);
  }
  return response;
}

// Register — daftar akun baru
export async function register(nama: string, email: string, password: string): Promise<RegisterResponse> {
  const response = await apiPost<RegisterResponse>('/auth/register', { nama, email, password });
  return response;
}

// Get Profile — ambil profil user yang sedang login
export async function getProfile(): Promise<UserProfile> {
  return await apiGetSecure<UserProfile>('/users/profile');
}

// Logout — hapus token dari storage
export async function logout(): Promise<void> {
  await removeToken();
}
