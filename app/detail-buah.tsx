import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import {
  ArrowLeft,
  Star,
  Leaf,
  Heart,
  Eye,
  Zap,
  Citrus,
  BarChart3,
  Brain,
  Shield,
} from 'lucide-react-native';
import { detailBuah } from '../constants/mockData';

const VITAMIN_ICONS: Record<string, React.ComponentType<any>> = {
  citrus: Citrus,
  eye: Eye,
  heart: Heart,
  zap: Zap,
};

const HEALTH_ICONS: Record<string, React.ComponentType<any>> = {
  heart: Heart,
  leaf: Leaf,
  'bar-chart-3': BarChart3,
  brain: Brain,
};

export default function DetailBuahScreen() {
  const router = useRouter();
  const data = detailBuah;

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
            {data.namaLatin}
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

          <Text style={{ fontSize: 14, color: '#666', lineHeight: 22 }}>
            {data.deskripsi}
          </Text>
        </View>

        {/* Kandungan Vitamin */}
        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a1a', marginBottom: 14 }}>
            Kandungan Vitamin
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {data.vitamin.map((vit, index) => {
              const IconComp = VITAMIN_ICONS[vit.ikon] || Leaf;
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
                      backgroundColor: '#E8F5E9',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 10,
                    }}
                  >
                    <IconComp color="#2E7D32" size={20} />
                  </View>
                  <Text style={{ fontSize: 16, fontWeight: '700', color: '#1a1a1a' }}>
                    {vit.jumlah}
                  </Text>
                  <Text style={{ fontSize: 12, color: '#9E9E9E', marginTop: 2 }}>
                    {vit.nama}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        {/* Antioksidan */}
        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a1a', marginBottom: 14 }}>
            Antioksidan
          </Text>
          {data.antioksidan.map((item, index) => (
            <View
              key={index}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 16,
                padding: 16,
                marginBottom: 10,
                flexDirection: 'row',
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
                  backgroundColor: '#E8F5E9',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 14,
                }}
              >
                <Shield color="#2E7D32" size={20} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 15, fontWeight: '700', color: '#1a1a1a', marginBottom: 4 }}>
                  {item.nama}
                </Text>
                <Text style={{ fontSize: 13, color: '#9E9E9E', lineHeight: 18 }}>
                  {item.deskripsi}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Dampak Kesehatan */}
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a1a', marginBottom: 14 }}>
            Dampak Kesehatan
          </Text>
          {data.dampakKesehatan.map((item, index) => {
            const IconComp = HEALTH_ICONS[item.ikon] || Heart;
            return (
              <View
                key={index}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 16,
                  padding: 16,
                  marginBottom: 10,
                  flexDirection: 'row',
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
                    backgroundColor: data.warna + '15',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 14,
                  }}
                >
                  <IconComp color={data.warna} size={20} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15, fontWeight: '700', color: '#1a1a1a', marginBottom: 4 }}>
                    {item.judul}
                  </Text>
                  <Text style={{ fontSize: 13, color: '#9E9E9E', lineHeight: 18 }}>
                    {item.deskripsi}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
