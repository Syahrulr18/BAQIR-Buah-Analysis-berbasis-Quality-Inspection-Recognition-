import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, User, Mail, Lock } from 'lucide-react-native';
import { userProfile } from '../constants/mockData';

export default function PengaturanAkunScreen() {
  const router = useRouter();
  const [name, setName] = useState(userProfile.nama);
  const [email, setEmail] = useState(userProfile.email);

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
          Pengaturan Akun
        </Text>
      </View>
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 14, fontWeight: '600', color: '#666', marginBottom: 8 }}>Informasi Pribadi</Text>
        
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 12, color: '#9E9E9E', marginBottom: 4 }}>Nama Lengkap</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F5F5', borderRadius: 12, paddingHorizontal: 12, height: 50 }}>
            <User color="#9E9E9E" size={20} />
            <TextInput style={{ flex: 1, marginLeft: 12, fontSize: 15, color: '#1a1a1a' }} value={name} onChangeText={setName} />
          </View>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 12, color: '#9E9E9E', marginBottom: 4 }}>Alamat Email</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F5F5', borderRadius: 12, paddingHorizontal: 12, height: 50 }}>
            <Mail color="#9E9E9E" size={20} />
            <TextInput style={{ flex: 1, marginLeft: 12, fontSize: 15, color: '#1a1a1a' }} value={email} onChangeText={setEmail} keyboardType="email-address" />
          </View>
        </View>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 16, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#F5F5F5' }}>
          <View style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: '#E8F5E9', alignItems: 'center', justifyContent: 'center', marginRight: 14 }}>
            <Lock color="#2E7D32" size={20} />
          </View>
          <Text style={{ flex: 1, fontSize: 15, fontWeight: '500', color: '#1a1a1a' }}>Ubah Kata Sandi</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 40, backgroundColor: '#2E7D32', padding: 16, borderRadius: 16, alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 16 }}>Simpan Perubahan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 24, alignItems: 'center' }}>
          <Text style={{ color: '#EF4444', fontWeight: '600', fontSize: 14 }}>Hapus Akun</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
