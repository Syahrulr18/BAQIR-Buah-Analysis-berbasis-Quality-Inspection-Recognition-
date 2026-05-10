import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';

export default function KebijakanPrivasiScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffffff' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 16,
          marginTop: 40,
          backgroundColor: '#FFFFFF',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.05,
          shadowRadius: 4,
          elevation: 2,
        }}
      >
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 8, marginLeft: -8 }}>
          <ArrowLeft color="#1a1a1a" size={24} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a1a', marginLeft: 12 }}>
          Kebijakan Privasi
        </Text>
      </View>
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: '700', color: '#1a1a1a', marginBottom: 12 }}>1. Pengumpulan Data</Text>
        <Text style={{ fontSize: 14, color: '#666', lineHeight: 22, marginBottom: 20 }}>
          Aplikasi BAQIR mengumpulkan data berupa gambar buah yang Anda pindai semata-mata untuk keperluan analisis kualitas dan jenis buah. Kami tidak membagikan foto Anda ke pihak ketiga.
        </Text>

        <Text style={{ fontSize: 16, fontWeight: '700', color: '#1a1a1a', marginBottom: 12 }}>2. Penggunaan Informasi</Text>
        <Text style={{ fontSize: 14, color: '#666', lineHeight: 22, marginBottom: 20 }}>
          Informasi profil seperti nama dan email digunakan untuk mempersonalisasi pengalaman Anda dalam menyimpan resep jus dan tips penyimpanan yang difavoritkan.
        </Text>

        <Text style={{ fontSize: 16, fontWeight: '700', color: '#1a1a1a', marginBottom: 12 }}>3. Keamanan</Text>
        <Text style={{ fontSize: 14, color: '#666', lineHeight: 22, marginBottom: 20 }}>
          Kami berkomitmen untuk melindungi data pribadi Anda menggunakan standar keamanan yang layak untuk mencegah akses tanpa izin.
        </Text>

        <Text style={{ fontSize: 16, fontWeight: '700', color: '#1a1a1a', marginBottom: 12 }}>4. Perubahan Kebijakan</Text>
        <Text style={{ fontSize: 14, color: '#666', lineHeight: 22, marginBottom: 40 }}>
          Kebijakan privasi ini dapat diperbarui dari waktu ke waktu. Kami akan memberi tahu pengguna tentang perubahan penting melalui notifikasi di dalam aplikasi.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
