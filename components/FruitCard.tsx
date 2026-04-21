import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Leaf } from 'lucide-react-native';
import type { Buah } from '../constants/mockData';

interface FruitCardProps {
  item: Buah;
  onPress?: () => void;
}

export default function FruitCard({ item, onPress }: FruitCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={{
        width: 150,
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
          height: 110,
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
          <Leaf color={item.warna} size={32} />
        </View>
      </View>
      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 15, fontWeight: '700', color: '#1a1a1a', marginBottom: 4 }}>
          {item.nama}
        </Text>
        <Text style={{ fontSize: 12, color: '#9E9E9E', lineHeight: 16 }} numberOfLines={2}>
          {item.manfaat}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
