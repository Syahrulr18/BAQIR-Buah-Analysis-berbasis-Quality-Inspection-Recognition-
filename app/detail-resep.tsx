import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Clock, ChefHat, Check, CupSoda } from 'lucide-react-native';
import { resepJus } from '../constants/mockData';

export default function DetailResepScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const resep = resepJus.find((r) => r.id === id) || resepJus[0];

  return (
    <View style={{ flex: 1, backgroundColor: '#F1F8E9' }}>
      {/* Hero Image */}
      <View
        style={{
          height: 260,
          backgroundColor: resep.warna + '25',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
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
            width: 110,
            height: 110,
            borderRadius: 55,
            backgroundColor: resep.warna + '30',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CupSoda color={resep.warna} size={52} />
        </View>
      </View>

      <ScrollView
        style={{ flex: 1, marginTop: -30 }}
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
            marginBottom: 24,
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: '800', color: '#1a1a1a', marginBottom: 8 }}>
            {resep.nama}
          </Text>
          <Text style={{ fontSize: 13, color: '#9E9E9E', lineHeight: 20, marginBottom: 16 }}>
            {resep.deskripsi}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#E8F5E9',
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 12,
                marginRight: 10,
              }}
            >
              <Clock color="#2E7D32" size={16} />
              <Text style={{ fontSize: 13, color: '#2E7D32', fontWeight: '600', marginLeft: 6 }}>
                {resep.waktuPersiapan}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#FFF3E0',
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 12,
              }}
            >
              <ChefHat color="#F57C00" size={16} />
              <Text style={{ fontSize: 13, color: '#F57C00', fontWeight: '600', marginLeft: 6 }}>
                {resep.kesulitan}
              </Text>
            </View>
          </View>
        </View>

        {/* Bahan-bahan */}
        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a1a', marginBottom: 14 }}>
            Bahan-bahan
          </Text>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 16,
              padding: 16,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 6,
              elevation: 2,
            }}
          >
            {resep.bahan.map((bahan, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 10,
                  borderBottomWidth: index < resep.bahan.length - 1 ? 1 : 0,
                  borderBottomColor: '#F5F5F5',
                }}
              >
                <View
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    backgroundColor: '#E8F5E9',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 12,
                  }}
                >
                  <Check color="#2E7D32" size={14} />
                </View>
                <Text style={{ fontSize: 14, color: '#444', fontWeight: '500' }}>
                  {bahan}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Langkah-langkah */}
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a1a', marginBottom: 14 }}>
            Langkah Persiapan
          </Text>
          {resep.langkah.map((langkah, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                marginBottom: 16,
              }}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 10,
                  backgroundColor: '#2E7D32',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 14,
                  marginTop: 2,
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: '700', color: '#FFFFFF' }}>
                  {index + 1}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 14,
                  padding: 14,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.04,
                  shadowRadius: 4,
                  elevation: 1,
                }}
              >
                <Text style={{ fontSize: 14, color: '#444', lineHeight: 20 }}>
                  {langkah}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
