import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Clock, CupSoda } from 'lucide-react-native';
import type { ResepJus } from '../constants/mockData';

interface RecipeCardProps {
  item: ResepJus;
  onPress?: () => void;
}

export default function RecipeCard({ item, onPress }: RecipeCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={{
        width: 180,
        marginRight: 14,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
      }}
    >
      <View
        style={{
          backgroundColor: item.warna + '20',
          height: 120,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            width: 64,
            height: 64,
            borderRadius: 32,
            backgroundColor: item.warna + '30',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CupSoda color={item.warna} size={32} />
        </View>
      </View>
      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 14, fontWeight: '700', color: '#1a1a1a', marginBottom: 6 }} numberOfLines={1}>
          {item.nama}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Clock color="#9E9E9E" size={13} />
          <Text style={{ fontSize: 12, color: '#9E9E9E', marginLeft: 4 }}>
            {item.waktuPersiapan}
          </Text>
          <View
            style={{
              backgroundColor: '#E8F5E9',
              paddingHorizontal: 8,
              paddingVertical: 2,
              borderRadius: 8,
              marginLeft: 8,
            }}
          >
            <Text style={{ fontSize: 10, color: '#2E7D32', fontWeight: '600' }}>
              {item.kesulitan}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
