import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Platform, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Leaf } from 'lucide-react-native';
import * as scanService from '../services/scanService';
import type { RiwayatScan } from '../constants/types';

const FILTERS = ['Semua', 'Buah', 'Sayuran'] as const;

export default function RiwayatScreen() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<string>('Semua');
  const [riwayatList, setRiwayatList] = useState<RiwayatScan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const data = await scanService.getHistory();
      setRiwayatList(data || []);
    } catch (error) {
      console.log('Gagal memuat riwayat:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredData = riwayatList.filter((item) => {
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
      {loading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#2E7D32" />
        </View>
      ) : (
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {filteredData.map((item) => {
            const isExpired = item.kesegaran < 50;
            const badgeColor = isExpired ? '#FEE2E2' : '#E8F5E9';
            const badgeTextColor = isExpired ? '#EF4444' : '#2E7D32';
            const badgeText = isExpired
              ? `${item.kesegaran}% Busuk`
              : `${item.kesegaran}% Segar`;

            return (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  router.push({
                    pathname: '/hasil-analisis',
                    params: { data: JSON.stringify(item) },
                  })
                }
                activeOpacity={0.85}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 16,
                  padding: 14,
                  marginBottom: 10,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.06,
                  shadowRadius: 6,
                  elevation: 2,
                }}
              >
                <View
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: 14,
                    backgroundColor: (item.warna || '#4CAF50') + '20',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 14,
                  }}
                >
                  <Leaf color={item.warna || '#4CAF50'} size={26} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15, fontWeight: '700', color: '#1a1a1a', marginBottom: 3 }}>
                    {item.namaBuah}
                  </Text>
                  <Text style={{ fontSize: 12, color: '#9E9E9E' }}>
                    {new Date(item.tanggal).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: badgeColor,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ fontSize: 11, fontWeight: '700', color: badgeTextColor }}>
                    {badgeText}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
          {filteredData.length === 0 && (
            <View style={{ alignItems: 'center', paddingTop: 60 }}>
              <Text style={{ fontSize: 15, color: '#9E9E9E', fontWeight: '500' }}>
                Belum ada riwayat pemindaian
              </Text>
            </View>
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
