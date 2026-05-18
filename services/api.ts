import AsyncStorage from '@react-native-async-storage/async-storage';

// Base URL backend — gunakan IP lokal komputer untuk Expo Go di HP fisik
const BASE_URL = 'http://192.168.18.35:8080/api';

const TOKEN_KEY = 'baqir_auth_token';

// Simpan JWT token ke storage
export async function setToken(token: string): Promise<void> {
  await AsyncStorage.setItem(TOKEN_KEY, token);
}

// Ambil JWT token dari storage
export async function getToken(): Promise<string | null> {
  return await AsyncStorage.getItem(TOKEN_KEY);
}

// Hapus JWT token (logout)
export async function removeToken(): Promise<void> {
  await AsyncStorage.removeItem(TOKEN_KEY);
}

// GET request tanpa auth
export async function apiGet<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Terjadi kesalahan jaringan' }));
    throw new Error(error.error || `HTTP Error ${response.status}`);
  }

  return response.json();
}

// GET request dengan auth (JWT)
export async function apiGetSecure<T>(endpoint: string): Promise<T> {
  const token = await getToken();
  if (!token) {
    throw new Error('Sesi telah berakhir. Silakan login kembali.');
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Terjadi kesalahan jaringan' }));
    throw new Error(error.error || `HTTP Error ${response.status}`);
  }

  return response.json();
}

// POST request tanpa auth
export async function apiPost<T>(endpoint: string, data: any): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Terjadi kesalahan jaringan' }));
    throw new Error(error.error || `HTTP Error ${response.status}`);
  }

  return response.json();
}

// POST request dengan auth (JWT) — untuk form data (upload gambar)
export async function apiPostFormData<T>(endpoint: string, formData: FormData): Promise<T> {
  const token = await getToken();
  if (!token) {
    throw new Error('Sesi telah berakhir. Silakan login kembali.');
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Terjadi kesalahan jaringan' }));
    throw new Error(error.error || `HTTP Error ${response.status}`);
  }

  return response.json();
}
