import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import HistoryItem from '../components/HistoryItem';
import { riwayatPemindaian } from '../constants/mockData';

const FILTERS = ['Semua', 'Buah', 'Sayuran'] as const;

export default function RiwayatScreen() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<string>('Semua');

  const filteredData = riwayatPemindaian.filter((item) => {
    if (activeFilter === 'Semua') return true;
    if (activeFilter === 'Buah') return item.kategori === 'buah';
    if (activeFilter === 'Sayuran') return item.kategori === 'sayuran';
    return true;
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F1F8E9' }}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingTop: Platform.OS === 'android' ? 40 : 8,
          paddingBottom: 16,
        }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            width: 42,
            height: 42,
            borderRadius: 14,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 14,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.06,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <ArrowLeft color="#1a1a1a" size={22} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: '700', color: '#1a1a1a' }}>
          Riwayat Pemindaian
        </Text>
      </View>

      {/* Filter Tabs */}
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          marginBottom: 16,
        }}
      >
        {FILTERS.map((filter) => (
          <TouchableOpacity
            key={filter}
            onPress={() => setActiveFilter(filter)}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 12,
              backgroundColor: activeFilter === filter ? '#2E7D32' : '#FFFFFF',
              marginRight: 10,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: activeFilter === filter ? 0.15 : 0.04,
              shadowRadius: 4,
              elevation: activeFilter === filter ? 3 : 1,
            }}
          >
            <Text
              style={{
                fontSize: 13,
                fontWeight: '600',
                color: activeFilter === filter ? '#FFFFFF' : '#9E9E9E',
              }}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* List */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {filteredData.map((item) => (
          <HistoryItem
            key={item.id}
            item={item}
            onPress={() => router.push('/hasil-analisis')}
          />
        ))}
        {filteredData.length === 0 && (
          <View style={{ alignItems: 'center', paddingTop: 60 }}>
            <Text style={{ fontSize: 15, color: '#9E9E9E', fontWeight: '500' }}>
              Belum ada riwayat pemindaian
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
