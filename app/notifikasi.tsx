import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, BellRing, Smartphone, Mail } from 'lucide-react-native';

export default function NotifikasiScreen() {
  const router = useRouter();
  const [pushNotif, setPushNotif] = useState(true);
  const [emailNotif, setEmailNotif] = useState(false);
  const [promoNotif, setPromoNotif] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffffff' }}>
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
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 8, marginLeft: -8 }}>
          <ArrowLeft color="#1a1a1a" size={24} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a1a', marginLeft: 12 }}>
          Pengaturan Notifikasi
        </Text>
      </View>
      <ScrollView style={{ padding: 20 }}>
        
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#F5F5F5' }}>
          <View style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: '#E8F5E9', alignItems: 'center', justifyContent: 'center', marginRight: 14 }}>
            <Smartphone color="#2E7D32" size={20} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#1a1a1a' }}>Notifikasi Push</Text>
            <Text style={{ fontSize: 12, color: '#9E9E9E', marginTop: 2 }}>Terima notifikasi di perangkat Anda</Text>
          </View>
          <Switch
            trackColor={{ false: '#E0E0E0', true: '#81C784' }}
            thumbColor={pushNotif ? '#2E7D32' : '#f4f3f4'}
            onValueChange={setPushNotif}
            value={pushNotif}
          />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#F5F5F5' }}>
          <View style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: '#E8F5E9', alignItems: 'center', justifyContent: 'center', marginRight: 14 }}>
            <Mail color="#2E7D32" size={20} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#1a1a1a' }}>Notifikasi Email</Text>
            <Text style={{ fontSize: 12, color: '#9E9E9E', marginTop: 2 }}>Info pembaruan dikirim ke email</Text>
          </View>
          <Switch
            trackColor={{ false: '#E0E0E0', true: '#81C784' }}
            thumbColor={emailNotif ? '#2E7D32' : '#f4f3f4'}
            onValueChange={setEmailNotif}
            value={emailNotif}
          />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#F5F5F5' }}>
          <View style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: '#E8F5E9', alignItems: 'center', justifyContent: 'center', marginRight: 14 }}>
            <BellRing color="#2E7D32" size={20} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#1a1a1a' }}>Promo & Penawaran</Text>
            <Text style={{ fontSize: 12, color: '#9E9E9E', marginTop: 2 }}>Info menarik seputar aplikasi</Text>
          </View>
          <Switch
            trackColor={{ false: '#E0E0E0', true: '#81C784' }}
            thumbColor={promoNotif ? '#2E7D32' : '#f4f3f4'}
            onValueChange={setPromoNotif}
            value={promoNotif}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
