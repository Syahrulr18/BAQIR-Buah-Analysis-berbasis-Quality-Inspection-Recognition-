import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface GradientButtonProps {
  title: string;
  onPress: () => void;
  colors?: string[];
  className?: string;
}

export default function GradientButton({
  title,
  onPress,
  colors = ['#4CAF50', '#2E7D32'],
  className = '',
}: GradientButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
      <LinearGradient
        colors={colors as [string, string, ...string[]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          borderRadius: 16,
          paddingVertical: 16,
          alignItems: 'center',
          shadowColor: '#2E7D32',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 6,
        }}
      >
        <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 17 }}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
