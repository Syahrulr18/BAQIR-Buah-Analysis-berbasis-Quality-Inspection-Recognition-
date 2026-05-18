import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Leaf, CheckCircle, AlertTriangle, XCircle, UtensilsCrossed } from 'lucide-react-native';
import CircularProgress from '../components/CircularProgress';
import type { HasilAnalisis } from '../constants/types';

export default function HasilAnalisisScreen() {
  const router = useRouter();
  const { data: dataParam } = useLocalSearchParams<{ data: string }>();

  // Parse data dari route params
  let data: HasilAnalisis | null = null;
  try {
    if (dataParam) {
      data = JSON.parse(dataParam);
    }
  } catch {
    data = null;
  }

  if (!data) {
    return (
      <View style={{ flex: 1, backgroundColor: '#F1F8E9', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 16, color: '#9E9E9E' }}>Data analisis tidak tersedia</Text>
        <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 15, color: '#2E7D32', fontWeight: '600' }}>Kembali</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Tentukan warna dan ikon berdasarkan status
  const getStatusConfig = () => {
    switch (data!.statusKelayakan) {
      case 'Segar':
        return { color: '#4CAF50', bgColor: '#E8F5E9', icon: CheckCircle, label: 'Segar' };
      case 'Layak Konsumsi':
        return { color: '#FF9800', bgColor: '#FFF3E0', icon: AlertTriangle, label: 'Layak Konsumsi' };
      case 'Busuk':
        return { color: '#EF4444', bgColor: '#FEE2E2', icon: XCircle, label: 'Busuk' };
      default:
        return { color: '#4CAF50', bgColor: '#E8F5E9', icon: CheckCircle, label: data!.statusKelayakan };
    }
  };

  const statusConfig = getStatusConfig();
  const StatusIcon = statusConfig.icon;

  return (
    <View style={{ flex: 1, backgroundColor: '#F1F8E9' }}>
      {/* Hero */}
      <View
        style={{
          height: 280,
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
        style={{ flex: 1, marginTop: -40 }}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Info Card */}
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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 24, fontWeight: '800', color: '#1a1a1a', marginBottom: 8 }}>
                {data.namaBuah}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: statusConfig.bgColor,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 10,
                  alignSelf: 'flex-start',
                }}
              >
                <StatusIcon color={statusConfig.color} size={16} />
                <Text style={{ fontSize: 13, color: statusConfig.color, fontWeight: '600', marginLeft: 6 }}>
                  {statusConfig.label}
                </Text>
              </View>
            </View>
            <CircularProgress
              percentage={data.kesegaran}
              size={100}
              strokeWidth={8}
              color={statusConfig.color}
            />
          </View>
        </View>

        {/* Saran Penyimpanan */}
        <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a1a', marginBottom: 14 }}>
            Saran Penyimpanan
          </Text>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 16,
              padding: 18,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 6,
              elevation: 2,
            }}
          >
            <Text style={{ fontSize: 14, color: '#666', lineHeight: 22 }}>
              {data.saranPenyimpanan}
            </Text>
          </View>
        </View>

        {/* Resep Saran */}
        {data.resepSaran && data.resepSaran.length > 0 && (
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a1a', marginBottom: 14 }}>
              Resep yang Disarankan
            </Text>
            {data.resepSaran.map((resep, index) => (
              <View
                key={index}
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
                    backgroundColor: '#E8F5E9',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 14,
                  }}
                >
                  <UtensilsCrossed color="#2E7D32" size={24} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 14, fontWeight: '600', color: '#1a1a1a' }}>
                    {resep.nama}
                  </Text>
                  <Text style={{ fontSize: 12, color: '#9E9E9E', marginTop: 2, lineHeight: 17 }}>
                    {resep.resep}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
