import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Leaf } from 'lucide-react-native';
import type { RiwayatScan } from '../constants/mockData';

interface HistoryItemProps {
  item: RiwayatScan;
  onPress?: () => void;
}

export default function HistoryItem({ item, onPress }: HistoryItemProps) {
  const isExpired = item.kesegaran < 50;
  const badgeColor = isExpired ? '#FEE2E2' : '#E8F5E9';
  const badgeTextColor = isExpired ? '#EF4444' : '#2E7D32';
  const badgeText = isExpired
    ? `${item.kesegaran}% Kedaluwarsa`
    : `${item.kesegaran}% Segar`;

  return (
    <TouchableOpacity
      onPress={onPress}
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
          backgroundColor: item.warna + '20',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 14,
        }}
      >
        <Leaf color={item.warna} size={26} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 15, fontWeight: '700', color: '#1a1a1a', marginBottom: 3 }}>
          {item.nama}
        </Text>
        <Text style={{ fontSize: 12, color: '#9E9E9E' }}>{item.tanggal}</Text>
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
}
