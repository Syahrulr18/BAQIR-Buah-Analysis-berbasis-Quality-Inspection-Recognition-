import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Platform, ActivityIndicator } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import {
  ArrowLeft,
  Star,
  Leaf,
  Flame,
  Droplets,
  Wheat,
  CakeSlice,
  Beef,
} from 'lucide-react-native';
import * as fruitService from '../services/fruitService';
import type { Buah } from '../constants/types';

export default function DetailBuahScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [data, setData] = useState<Buah | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBuah();
  }, [id]);

  const loadBuah = async () => {
    try {
      const buah = await fruitService.getBuahById(Number(id));
      setData(buah);
    } catch (error) {
      console.log('Gagal memuat detail buah:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, backgroundColor: '#F1F8E9', alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#2E7D32" />
      </View>
    );
  }

  if (!data) {
    return (
      <View style={{ flex: 1, backgroundColor: '#F1F8E9', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 16, color: '#9E9E9E' }}>Buah tidak ditemukan</Text>
        <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 15, color: '#2E7D32', fontWeight: '600' }}>Kembali</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Data nutrisi dari Fruityvice
  const nutrisiList = [
    { nama: 'Kalori', jumlah: `${data.kalori} kkal`, ikon: Flame, warna: '#FF6B6B' },
    { nama: 'Karbohidrat', jumlah: `${data.karbohidrat}g`, ikon: Wheat, warna: '#FF9F43' },
    { nama: 'Protein', jumlah: `${data.protein}g`, ikon: Beef, warna: '#3B82F6' },
    { nama: 'Lemak', jumlah: `${data.lemak}g`, ikon: Droplets, warna: '#FECA57' },
    { nama: 'Gula', jumlah: `${data.gula}g`, ikon: CakeSlice, warna: '#A855F7' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#F1F8E9' }}>
      {/* Hero */}
      <View
        style={{
          height: 260,
          backgroundColor: data.warna + '25',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SafeAreaView
          style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              width: 42,
              height: 42,
              borderRadius: 14,
              backgroundColor: 'rgba(255,255,255,0.9)',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 20,
              marginTop: Platform.OS === 'android' ? 36 : 8,
            }}
          >
            <ArrowLeft color="#1a1a1a" size={22} />
          </TouchableOpacity>
        </SafeAreaView>

        <View
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            backgroundColor: data.warna + '30',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Leaf color={data.warna} size={60} />
        </View>
      </View>

      <ScrollView
        style={{ flex: 1, marginTop: -30 }}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Info Card */}
        <View
          style={{
            marginHorizontal: 20,
            backgroundColor: '#FFFFFF',
            borderRadius: 24,
            padding: 24,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 12,
            elevation: 6,
            marginBottom: 24,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: '800', color: '#1a1a1a', marginBottom: 4 }}>
            {data.nama}
          </Text>
          <Text style={{ fontSize: 14, color: '#9E9E9E', fontStyle: 'italic', marginBottom: 12 }}>
            {data.family} - {data.genus}
          </Text>

          {/* Rating */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                color={star <= Math.floor(data.rating) ? '#FFD93D' : '#E0E0E0'}
                fill={star <= Math.floor(data.rating) ? '#FFD93D' : 'none'}
                size={20}
              />
            ))}
            <Text style={{ fontSize: 14, fontWeight: '600', color: '#1a1a1a', marginLeft: 8 }}>
              {data.rating}
            </Text>
          </View>

          {/* Klasifikasi */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 8 }}>
            <View style={{ backgroundColor: '#E8F5E9', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10, marginRight: 8, marginBottom: 8 }}>
              <Text style={{ fontSize: 12, color: '#2E7D32', fontWeight: '600' }}>Family: {data.family}</Text>
            </View>
            <View style={{ backgroundColor: '#E3F2FD', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10, marginRight: 8, marginBottom: 8 }}>
              <Text style={{ fontSize: 12, color: '#1565C0', fontWeight: '600' }}>Genus: {data.genus}</Text>
            </View>
            <View style={{ backgroundColor: '#FFF3E0', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10, marginBottom: 8 }}>
              <Text style={{ fontSize: 12, color: '#E65100', fontWeight: '600' }}>Ordo: {data.order}</Text>
            </View>
          </View>

          {data.deskripsi ? (
            <Text style={{ fontSize: 14, color: '#666', lineHeight: 22 }}>
              {data.deskripsi}
            </Text>
          ) : null}
        </View>

        {/* Kandungan Nutrisi */}
        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a1a', marginBottom: 14 }}>
            Kandungan Nutrisi (per 100g)
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {nutrisiList.map((item, index) => {
              const IconComp = item.ikon;
              return (
                <View
                  key={index}
                  style={{
                    width: '48%',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 16,
                    padding: 16,
                    marginBottom: 10,
                    marginRight: index % 2 === 0 ? '4%' : 0,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.06,
                    shadowRadius: 6,
                    elevation: 2,
                  }}
                >
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      backgroundColor: item.warna + '20',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 10,
                    }}
                  >
                    <IconComp color={item.warna} size={20} />
                  </View>
                  <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a1a' }}>
                    {item.jumlah}
                  </Text>
                  <Text style={{ fontSize: 12, color: '#9E9E9E', marginTop: 2 }}>
                    {item.nama}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
