import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Leaf, CheckCircle, Refrigerator, CupSoda } from 'lucide-react-native';
import CircularProgress from '../components/CircularProgress';
import NutritionCard from '../components/NutritionCard';
import { hasilAnalisis, resepJus } from '../constants/mockData';

export default function HasilAnalisisScreen() {
  const router = useRouter();
  const data = hasilAnalisis;

  return (
    <View style={{ flex: 1, backgroundColor: '#F1F8E9' }}>
      {/* Hero Image Area */}
      <View
        style={{
          height: 280,
          backgroundColor: data.warna + '25',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Back Button */}
        <SafeAreaView
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
          }}
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
        style={{ flex: 1, marginTop: -40 }}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Floating Info Card */}
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
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 24, fontWeight: '800', color: '#1a1a1a', marginBottom: 8 }}>
                {data.nama}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#E8F5E9',
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 10,
                  alignSelf: 'flex-start',
                }}
              >
                <CheckCircle color="#2E7D32" size={16} />
                <Text style={{ fontSize: 13, color: '#2E7D32', fontWeight: '600', marginLeft: 6 }}>
                  {data.status}
                </Text>
              </View>
            </View>
            <CircularProgress percentage={data.kesegaran} size={100} strokeWidth={8} />
          </View>
        </View>

        {/* Nilai Gizi */}
        <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a1a', marginBottom: 14 }}>
            Nilai Gizi
          </Text>
          <View style={{ flexDirection: 'row' }}>
            {data.nilaiGizi.map((item, index) => (
              <NutritionCard key={index} item={item} />
            ))}
          </View>
        </View>

        {/* Rekomendasi Penyimpanan */}
        <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a1a', marginBottom: 14 }}>
            Rekomendasi Penyimpanan
          </Text>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 16,
              padding: 18,
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
                width: 44,
                height: 44,
                borderRadius: 12,
                backgroundColor: '#E8F5E9',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 14,
              }}
            >
              <Refrigerator color="#2E7D32" size={22} />
            </View>
            <Text
              style={{ flex: 1, fontSize: 13, color: '#666', lineHeight: 20 }}
            >
              {data.rekomendasiPenyimpanan}
            </Text>
          </View>
        </View>

        {/* Resep Terkait */}
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a1a', marginBottom: 14 }}>
            Resep yang Disarankan
          </Text>
          {resepJus.slice(0, 3).map((resep) => (
            <TouchableOpacity
              key={resep.id}
              onPress={() => router.push({ pathname: '/detail-resep', params: { id: resep.id } })}
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
                  width: 50,
                  height: 50,
                  borderRadius: 14,
                  backgroundColor: resep.warna + '20',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 14,
                }}
              >
                <CupSoda color={resep.warna} size={24} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: '600', color: '#1a1a1a' }}>
                  {resep.nama}
                </Text>
                <Text style={{ fontSize: 12, color: '#9E9E9E', marginTop: 2 }}>
                  {resep.waktuPersiapan}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
