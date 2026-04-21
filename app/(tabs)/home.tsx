import React from 'react';
import { View, Text, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Search, Bell } from 'lucide-react-native';
import FruitCard from '../../components/FruitCard';
import RecipeCard from '../../components/RecipeCard';
import StorageTipCard from '../../components/StorageTipCard';
import { manfaatBuah, resepJus, tipsPenyimpanan, userProfile } from '../../constants/mockData';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F1F8E9' }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingTop: 16,
            paddingBottom: 8,
          }}
        >
          <View>
            <Text style={{ fontSize: 14, color: '#9E9E9E', fontWeight: '500' }}>
              Selamat datang,
            </Text>
            <Text style={{ fontSize: 22, fontWeight: '800', color: '#1a1a1a' }}>
              {userProfile.nama}
            </Text>
          </View>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 14,
              backgroundColor: '#FFFFFF',
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Bell color="#1a1a1a" size={22} />
          </View>
        </View>

        {/* Search Bar */}
        <View style={{ paddingHorizontal: 20, marginTop: 12, marginBottom: 24 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              borderRadius: 16,
              paddingHorizontal: 16,
              height: 50,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 6,
              elevation: 2,
            }}
          >
            <Search color="#9E9E9E" size={20} />
            <TextInput
              placeholder="Cari buah, resep, atau tips..."
              placeholderTextColor="#BDBDBD"
              style={{ flex: 1, marginLeft: 12, fontSize: 14, color: '#1a1a1a' }}
            />
          </View>
        </View>

        {/* Manfaat Buah Section */}
        <View style={{ marginBottom: 28 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a1a' }}>
              Manfaat Buah
            </Text>
            <Text style={{ fontSize: 13, color: '#2E7D32', fontWeight: '600' }}>
              Lihat Semua
            </Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 20, paddingRight: 6 }}
          >
            {manfaatBuah.map((item) => (
              <FruitCard
                key={item.id}
                item={item}
                onPress={() => router.push({ pathname: '/detail-buah', params: { id: item.id } })}
              />
            ))}
          </ScrollView>
        </View>

        {/* Resep Jus Section */}
        <View style={{ marginBottom: 28 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a1a' }}>
              Resep Jus
            </Text>
            <Text style={{ fontSize: 13, color: '#2E7D32', fontWeight: '600' }}>
              Lihat Semua
            </Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 20, paddingRight: 6 }}
          >
            {resepJus.map((item) => (
              <RecipeCard
                key={item.id}
                item={item}
                onPress={() => router.push({ pathname: '/detail-resep', params: { id: item.id } })}
              />
            ))}
          </ScrollView>
        </View>

        {/* Tips Penyimpanan Section */}
        <View style={{ marginBottom: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a1a' }}>
              Tips Penyimpanan
            </Text>
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            {tipsPenyimpanan.map((item) => (
              <StorageTipCard key={item.id} item={item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
