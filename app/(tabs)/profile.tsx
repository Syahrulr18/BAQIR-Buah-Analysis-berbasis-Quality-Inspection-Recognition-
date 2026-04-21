import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import {
  User,
  ChevronRight,
  Settings,
  Globe,
  Bell,
  Info,
  LogOut,
  Shield,
} from 'lucide-react-native';
import { userProfile } from '../../constants/mockData';

interface MenuItemProps {
  icon: React.ComponentType<any>;
  label: string;
  color?: string;
  onPress?: () => void;
}

function MenuItem({ icon: Icon, label, color = '#1a1a1a', onPress }: MenuItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 12,
          backgroundColor: color === '#EF4444' ? '#FEE2E2' : '#E8F5E9',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 14,
        }}
      >
        <Icon color={color === '#EF4444' ? '#EF4444' : '#2E7D32'} size={20} />
      </View>
      <Text style={{ flex: 1, fontSize: 15, fontWeight: '500', color }}>
        {label}
      </Text>
      <ChevronRight color="#BDBDBD" size={20} />
    </TouchableOpacity>
  );
}

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F1F8E9' }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={{ alignItems: 'center', paddingTop: 24, paddingBottom: 28 }}>
          <View
            style={{
              width: 90,
              height: 90,
              borderRadius: 30,
              backgroundColor: '#2E7D32',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 14,
              shadowColor: '#2E7D32',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 6,
            }}
          >
            <User color="#FFFFFF" size={40} />
          </View>
          <Text style={{ fontSize: 20, fontWeight: '700', color: '#1a1a1a' }}>
            {userProfile.nama}
          </Text>
          <Text style={{ fontSize: 14, color: '#9E9E9E', marginTop: 4 }}>
            {userProfile.email}
          </Text>
        </View>

        {/* Menu Card */}
        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              overflow: 'hidden',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 6,
              elevation: 2,
              marginBottom: 16,
            }}
          >
            <MenuItem icon={Settings} label="Pengaturan Akun" />
            <View style={{ height: 1, backgroundColor: '#F5F5F5', marginLeft: 70 }} />
            <MenuItem icon={Globe} label="Bahasa" />
            <View style={{ height: 1, backgroundColor: '#F5F5F5', marginLeft: 70 }} />
            <MenuItem icon={Bell} label="Notifikasi" />
          </View>

          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              overflow: 'hidden',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 6,
              elevation: 2,
              marginBottom: 16,
            }}
          >
            <MenuItem icon={Shield} label="Kebijakan Privasi" />
            <View style={{ height: 1, backgroundColor: '#F5F5F5', marginLeft: 70 }} />
            <MenuItem icon={Info} label="Tentang Aplikasi" />
          </View>

          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              overflow: 'hidden',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 6,
              elevation: 2,
            }}
          >
            <MenuItem
              icon={LogOut}
              label="Keluar"
              color="#EF4444"
              onPress={() => router.replace('/login')}
            />
          </View>

          {/* App Version */}
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: '#BDBDBD',
              marginTop: 24,
              fontWeight: '500',
            }}
          >
            BAQIR v1.0.0
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
