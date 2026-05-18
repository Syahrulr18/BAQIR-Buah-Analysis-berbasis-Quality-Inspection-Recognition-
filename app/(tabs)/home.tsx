import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Search } from 'lucide-react-native';
import FruitCard from '../../components/FruitCard';
import RecipeCard from '../../components/RecipeCard';
import StorageTipCard from '../../components/StorageTipCard';
import * as fruitService from '../../services/fruitService';
import * as authService from '../../services/authService';
import type { Buah, ResepJus, TipsPenyimpanan } from '../../constants/types';

export default function HomeScreen() {
  const router = useRouter();
  const [userName, setUserName] = useState('Pengguna');
  const [buahList, setBuahList] = useState<Buah[]>([]);
  const [resepList, setResepList] = useState<ResepJus[]>([]);
  const [tipsList, setTipsList] = useState<TipsPenyimpanan[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [buah, resep, tips] = await Promise.all([
        fruitService.getAllBuah(),
        fruitService.getAllResep(),
        fruitService.getAllTips(),
      ]);
      setBuahList(buah || []);
      setResepList(resep || []);
      setTipsList(tips || []);

      // Ambil nama user
      try {
        const profile = await authService.getProfile();
        setUserName(profile.nama);
      } catch {
        // Token mungkin expired, tetap tampilkan data
      }
    } catch (error) {
      console.log('Gagal memuat data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter berdasarkan pencarian (semua data, bukan hanya yang ditampilkan)
  const query = searchQuery.toLowerCase();
  const filteredBuah = searchQuery
    ? buahList.filter((b) => b.nama.toLowerCase().includes(query) || b.family.toLowerCase().includes(query))
    : buahList;
  const filteredResep = searchQuery
    ? resepList.filter((r) => r.nama.toLowerCase().includes(query))
    : resepList;
  const filteredTips = searchQuery
    ? tipsList.filter((t) => t.judul.toLowerCase().includes(query) || t.deskripsi.toLowerCase().includes(query))
    : tipsList;
  const displayBuah = searchQuery ? filteredBuah : buahList.slice(0, 10);

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffffff', alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#2E7D32" />
        <Text style={{ marginTop: 12, color: '#9E9E9E', fontSize: 14 }}>Memuat data...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffffff' }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingTop: 16,
            paddingBottom: 8,
            marginTop: 50,
          }}
        >
          <View>
            <Text style={{ fontSize: 14, color: '#9E9E9E', fontWeight: '500' }}>
              Selamat datang,
            </Text>
            <Text style={{ fontSize: 22, fontWeight: '800', color: '#1a1a1a' }}>
              {userName}
            </Text>
          </View>
        </View>

        {/* Search Bar */}
        <View style={{ paddingHorizontal: 20, marginTop: 12, marginBottom: 24 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              borderRadius: 16,
              paddingHorizontal: 16,
              height: 50,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 6,
              elevation: 2,
            }}
          >
            <Search color="#9E9E9E" size={20} />
            <TextInput
              placeholder="Cari buah, resep, atau tips..."
              placeholderTextColor="#BDBDBD"
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={{ flex: 1, marginLeft: 12, fontSize: 14, color: '#1a1a1a' }}
            />
          </View>
        </View>

        {/* Manfaat Buah Section */}
        <View style={{ marginBottom: 28 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a1a' }}>
              Daftar Buah
            </Text>
            <TouchableOpacity 
              activeOpacity={0.7} 
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              onPress={() => router.push('/semua-buah')}
            >
              <Text style={{ fontSize: 13, color: '#2E7D32', fontWeight: '600' }}>
                Lihat Semua
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 20, paddingRight: 6, paddingBottom: 16, paddingTop: 4 }}
          >
            {displayBuah.map((item) => (
              <FruitCard
                key={item.id}
                item={item}
                onPress={() => router.push({ pathname: '/detail-buah', params: { id: item.id } })}
              />
            ))}
          </ScrollView>
        </View>

        {/* Resep Jus Section */}
        <View style={{ marginBottom: 28 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a1a' }}>
              Resep Jus
            </Text>
            <TouchableOpacity 
              activeOpacity={0.7} 
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              onPress={() => router.push('/semua-resep')}
            >
              <Text style={{ fontSize: 13, color: '#2E7D32', fontWeight: '600' }}>
                Lihat Semua
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 20, paddingRight: 6, paddingBottom: 16, paddingTop: 4 }}
          >
            {filteredResep.map((item) => (
              <RecipeCard
                key={item.id}
                item={item}
                onPress={() => router.push({ pathname: '/detail-resep', params: { id: item.id } })}
              />
            ))}
          </ScrollView>
        </View>

        {/* Tips Penyimpanan Section */}
        <View style={{ marginBottom: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a1a' }}>
              Tips Penyimpanan
            </Text>
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            {filteredTips.map((item) => (
              <StorageTipCard key={item.id} item={item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
