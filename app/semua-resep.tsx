import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import RecipeCard from '../components/RecipeCard';
import * as fruitService from '../services/fruitService';
import type { ResepJus } from '../constants/types';

export default function SemuaResepScreen() {
  const router = useRouter();
  const [resepList, setResepList] = useState<ResepJus[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadResep();
  }, []);

  const loadResep = async () => {
    try {
      const data = await fruitService.getAllResep();
      setResepList(data || []);
    } catch (error) {
      console.log('Gagal memuat data resep:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffffff' }}>
      {/* Header */}
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
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ padding: 8, marginLeft: -8 }}
        >
          <ArrowLeft color="#1a1a1a" size={24} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a1a', marginLeft: 12 }}>
          Semua Resep Jus
        </Text>
      </View>

      {loading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#2E7D32" />
        </View>
      ) : (
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 14 }}>
            {resepList.map((item) => (
              <View key={item.id} style={{ width: '47%', marginBottom: 14 }}>
                <RecipeCard
                  item={item}
                  onPress={() => router.push({ pathname: '/detail-resep', params: { id: item.id } })}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
