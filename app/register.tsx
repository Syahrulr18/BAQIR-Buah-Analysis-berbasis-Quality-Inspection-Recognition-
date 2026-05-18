import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Eye, EyeOff, User, Lock, Mail } from 'lucide-react-native';
import Logo from '../components/Logo';
import * as authService from '../services/authService';

export default function RegisterScreen() {
  const router = useRouter();
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!nama || !email || !password || !confirmPassword) {
      Alert.alert('Peringatan', 'Semua field harus diisi');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Peringatan', 'Kata sandi tidak cocok');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Peringatan', 'Kata sandi minimal 6 karakter');
      return;
    }

    setLoading(true);
    try {
      await authService.register(nama, email, password);
      Alert.alert('Berhasil', 'Akun berhasil dibuat! Silakan masuk.', [
        { text: 'OK', onPress: () => router.replace('/login') },
      ]);
    } catch (error: any) {
      Alert.alert('Gagal Mendaftar', error.message || 'Terjadi kesalahan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, backgroundColor: '#F1F8E9' }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          padding: 28,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo Area */}
        <View style={{ alignItems: 'center', marginBottom: 40 }}>
          <View
            style={{
              width: 90,
              height: 90,
              borderRadius: 28,
              backgroundColor: '#2E7D32',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
              shadowColor: '#2E7D32',
              shadowOffset: { width: 0, height: 6 },
              shadowOpacity: 0.35,
              shadowRadius: 12,
              elevation: 8,
            }}
          >
            <Logo color="#FFFFFF" width={44} height={44} />
          </View>
          <Text style={{ fontSize: 28, fontWeight: '800', color: '#1B5E20', letterSpacing: 2 }}>
            BAQIR
          </Text>
          <Text style={{ fontSize: 12, color: '#66BB6A', marginTop: 4, fontWeight: '500' }}>
            Buah Analysis Quality Inspection
          </Text>
        </View>

        {/* Form Card */}
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 24,
            padding: 24,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.08,
            shadowRadius: 12,
            elevation: 4,
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: '700', color: '#1a1a1a', marginBottom: 8 }}>
            Daftar
          </Text>
          <Text style={{ fontSize: 14, color: '#9E9E9E', marginBottom: 28 }}>
            Buat akun baru untuk memulai
          </Text>

          {/* Nama Input */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#F5F5F5',
              borderRadius: 14,
              paddingHorizontal: 14,
              marginBottom: 14,
              height: 52,
            }}
          >
            <User color="#9E9E9E" size={20} />
            <TextInput
              placeholder="Nama Lengkap"
              placeholderTextColor="#BDBDBD"
              value={nama}
              onChangeText={setNama}
              style={{
                flex: 1,
                marginLeft: 12,
                fontSize: 15,
                color: '#1a1a1a',
              }}
            />
          </View>

          {/* Email Input */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#F5F5F5',
              borderRadius: 14,
              paddingHorizontal: 14,
              marginBottom: 14,
              height: 52,
            }}
          >
            <Mail color="#9E9E9E" size={20} />
            <TextInput
              placeholder="Alamat Email"
              placeholderTextColor="#BDBDBD"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              style={{
                flex: 1,
                marginLeft: 12,
                fontSize: 15,
                color: '#1a1a1a',
              }}
            />
          </View>

          {/* Password Input */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#F5F5F5',
              borderRadius: 14,
              paddingHorizontal: 14,
              marginBottom: 14,
              height: 52,
            }}
          >
            <Lock color="#9E9E9E" size={20} />
            <TextInput
              placeholder="Kata Sandi"
              placeholderTextColor="#BDBDBD"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={{
                flex: 1,
                marginLeft: 12,
                fontSize: 15,
                color: '#1a1a1a',
              }}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <EyeOff color="#9E9E9E" size={20} />
              ) : (
                <Eye color="#9E9E9E" size={20} />
              )}
            </TouchableOpacity>
          </View>

          {/* Confirm Password Input */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#F5F5F5',
              borderRadius: 14,
              paddingHorizontal: 14,
              marginBottom: 28,
              height: 52,
            }}
          >
            <Lock color="#9E9E9E" size={20} />
            <TextInput
              placeholder="Konfirmasi Kata Sandi"
              placeholderTextColor="#BDBDBD"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirm}
              style={{
                flex: 1,
                marginLeft: 12,
                fontSize: 15,
                color: '#1a1a1a',
              }}
            />
            <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? (
                <EyeOff color="#9E9E9E" size={20} />
              ) : (
                <Eye color="#9E9E9E" size={20} />
              )}
            </TouchableOpacity>
          </View>

          {/* Register Button */}
          <TouchableOpacity onPress={handleRegister} activeOpacity={0.85} disabled={loading}>
            <LinearGradient
              colors={['#66BB6A', '#2E7D32']}
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
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 17 }}>
                  Daftar
                </Text>
              )}
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Login Link */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 28 }}>
          <Text style={{ fontSize: 14, color: '#9E9E9E' }}>Sudah punya akun? </Text>
          <TouchableOpacity onPress={() => router.replace('/login')}>
            <Text style={{ fontSize: 14, color: '#2E7D32', fontWeight: '700' }}>
              Masuk
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
