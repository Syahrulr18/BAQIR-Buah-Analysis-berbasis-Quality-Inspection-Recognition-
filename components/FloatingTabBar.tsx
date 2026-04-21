import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Home, ScanLine, User } from 'lucide-react-native';

const TAB_ICONS: Record<string, any> = {
  home: Home,
  scan: ScanLine,
  profile: User,
};

const TAB_LABELS: Record<string, string> = {
  home: 'Beranda',
  scan: 'Pindai',
  profile: 'Profil',
};

export default function FloatingTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? 28 : 20,
        left: 20,
        right: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 28,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 10,
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
        elevation: 12,
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const isCenter = route.name === 'scan';
        const IconComponent = TAB_ICONS[route.name] || Home;
        const label = TAB_LABELS[route.name] || route.name;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        if (isCenter) {
          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              activeOpacity={0.8}
              style={{ flex: 1, alignItems: 'center', marginTop: -36 }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  backgroundColor: '#2E7D32',
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowColor: '#2E7D32',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.4,
                  shadowRadius: 8,
                  elevation: 8,
                }}
              >
                <ScanLine color="#FFFFFF" size={28} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  marginTop: 4,
                  fontWeight: isFocused ? '700' : '500',
                  color: isFocused ? '#2E7D32' : '#9E9E9E',
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            activeOpacity={0.7}
            style={{ flex: 1, alignItems: 'center', paddingVertical: 4 }}
          >
            <IconComponent
              color={isFocused ? '#2E7D32' : '#9E9E9E'}
              size={24}
            />
            <Text
              style={{
                fontSize: 11,
                marginTop: 4,
                fontWeight: isFocused ? '700' : '500',
                color: isFocused ? '#2E7D32' : '#9E9E9E',
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
