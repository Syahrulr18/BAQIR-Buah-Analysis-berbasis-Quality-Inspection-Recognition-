import React from 'react';
import { View, Text } from 'react-native';
import { Wheat, Flame, Pill } from 'lucide-react-native';
import type { NilaiGizi } from '../constants/mockData';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  wheat: Wheat,
  flame: Flame,
  pill: Pill,
};

interface NutritionCardProps {
  item: NilaiGizi;
}

export default function NutritionCard({ item }: NutritionCardProps) {
  const IconComponent = ICON_MAP[item.ikon] || Pill;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        marginHorizontal: 4,
        alignItems: 'center',
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
          marginBottom: 10,
        }}
      >
        <IconComponent color="#2E7D32" size={22} />
      </View>
      <Text style={{ fontSize: 18, fontWeight: '800', color: '#1a1a1a', marginBottom: 2 }}>
        {item.jumlah}
      </Text>
      <Text style={{ fontSize: 12, color: '#9E9E9E', fontWeight: '500' }}>
        {item.nama}
      </Text>
    </View>
  );
}
