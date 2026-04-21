import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Thermometer, Leaf, Package, Droplets, Snowflake } from 'lucide-react-native';
import type { TipsPenyimpanan } from '../constants/mockData';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  thermometer: Thermometer,
  leaf: Leaf,
  package: Package,
  droplets: Droplets,
  snowflake: Snowflake,
};

interface StorageTipCardProps {
  item: TipsPenyimpanan;
  onPress?: () => void;
}

export default function StorageTipCard({ item, onPress }: StorageTipCardProps) {
  const IconComponent = ICON_MAP[item.ikon] || Leaf;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
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
        <IconComponent color="#2E7D32" size={24} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 14, fontWeight: '700', color: '#1a1a1a', marginBottom: 4 }}>
          {item.judul}
        </Text>
        <Text style={{ fontSize: 12, color: '#9E9E9E', lineHeight: 17 }} numberOfLines={2}>
          {item.deskripsi}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
