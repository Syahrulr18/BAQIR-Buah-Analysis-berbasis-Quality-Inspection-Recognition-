import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, ExternalLink } from 'lucide-react-native';
import Logo from '../components/Logo';

export default function TentangAplikasiScreen() {
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
          Tentang Aplikasi
        </Text>
      </View>
      <ScrollView contentContainerStyle={{ padding: 20, alignItems: 'center' }}>
        <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 24 }}>
          <View style={{ width: 100, height: 100, borderRadius: 24, backgroundColor: '#2E7D32', alignItems: 'center', justifyContent: 'center', elevation: 4 }}>
             <Logo color="#FFFFFF" width={60} height={60} />
          </View>
          <Text style={{ fontSize: 24, fontWeight: '800', color: '#1a1a1a', marginTop: 16 }}>BAQIR</Text>
          <Text style={{ fontSize: 14, color: '#9E9E9E', marginTop: 4 }}>Versi 1.0.0</Text>
        </View>

        <Text style={{ textAlign: 'center', fontSize: 15, color: '#666', lineHeight: 22, marginBottom: 30, paddingHorizontal: 10 }}>
          BAQIR (Buah Analysis Quality Inspection Recognition) adalah aplikasi inovatif yang dirancang untuk membantu Anda mendeteksi kualitas buah, mengetahui manfaat gizi, menemukan resep jus yang lezat, serta cara penyimpanannya secara akurat.
        </Text>

        <Text style={{ fontSize: 12, color: '#BDBDBD', marginTop: 40 }}>© 2026 BAQIR Team. Hak Cipta Dilindungi.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
